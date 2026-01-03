import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctks")
export default class CtkController {
  @operation({
    summary: "Get Ctks",
  })
  @get()
  static getCtks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctk",
  })
  @post("{id}")
  static createCtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

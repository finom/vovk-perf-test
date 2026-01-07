import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iin")
export default class IinController {
  @operation({
    summary: "Get Iin",
  })
  @get()
  static getIin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iin",
  })
  @post("{id}")
  static createIin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

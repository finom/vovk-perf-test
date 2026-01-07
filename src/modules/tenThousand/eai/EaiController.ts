import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eai")
export default class EaiController {
  @operation({
    summary: "Get Eai",
  })
  @get()
  static getEai = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eai",
  })
  @post("{id}")
  static createEai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

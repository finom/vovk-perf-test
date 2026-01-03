import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icls")
export default class IclController {
  @operation({
    summary: "Get Icls",
  })
  @get()
  static getIcls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icl",
  })
  @post("{id}")
  static createIcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

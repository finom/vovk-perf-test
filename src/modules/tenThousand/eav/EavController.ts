import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eavs")
export default class EavController {
  @operation({
    summary: "Get Eavs",
  })
  @get()
  static getEavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eav",
  })
  @post("{id}")
  static createEav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkv")
export default class FkvController {
  @operation({
    summary: "Get Fkv",
  })
  @get()
  static getFkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkv",
  })
  @post("{id}")
  static createFkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

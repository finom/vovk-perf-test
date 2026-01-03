import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlas")
export default class MlaController {
  @operation({
    summary: "Get Mlas",
  })
  @get()
  static getMlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mla",
  })
  @post("{id}")
  static createMla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mla")
export default class MlaController {
  @operation({
    summary: "Get Mla",
  })
  @get()
  static getMla = procedure({
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

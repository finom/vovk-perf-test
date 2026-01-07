import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffn")
export default class FfnController {
  @operation({
    summary: "Get Ffn",
  })
  @get()
  static getFfn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffn",
  })
  @post("{id}")
  static createFfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moas")
export default class MoaController {
  @operation({
    summary: "Get Moas",
  })
  @get()
  static getMoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moa",
  })
  @post("{id}")
  static createMoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

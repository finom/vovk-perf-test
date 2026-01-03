import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mos")
export default class MosController {
  @operation({
    summary: "Get Mos",
  })
  @get()
  static getMos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mos",
  })
  @post("{id}")
  static createMos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

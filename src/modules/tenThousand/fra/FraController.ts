import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fras")
export default class FraController {
  @operation({
    summary: "Get Fras",
  })
  @get()
  static getFras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fra",
  })
  @post("{id}")
  static createFra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

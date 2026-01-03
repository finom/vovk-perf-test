import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmas")
export default class DmaController {
  @operation({
    summary: "Get Dmas",
  })
  @get()
  static getDmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dma",
  })
  @post("{id}")
  static createDma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

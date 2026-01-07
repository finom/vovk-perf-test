import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dma")
export default class DmaController {
  @operation({
    summary: "Get Dma",
  })
  @get()
  static getDma = procedure({
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

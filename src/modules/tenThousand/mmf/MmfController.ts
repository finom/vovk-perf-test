import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmf")
export default class MmfController {
  @operation({
    summary: "Get Mmf",
  })
  @get()
  static getMmf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmf",
  })
  @post("{id}")
  static createMmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

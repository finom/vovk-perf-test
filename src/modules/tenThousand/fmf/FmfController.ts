import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmf")
export default class FmfController {
  @operation({
    summary: "Get Fmf",
  })
  @get()
  static getFmf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmf",
  })
  @post("{id}")
  static createFmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

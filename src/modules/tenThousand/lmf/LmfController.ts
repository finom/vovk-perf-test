import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmf")
export default class LmfController {
  @operation({
    summary: "Get Lmf",
  })
  @get()
  static getLmf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmf",
  })
  @post("{id}")
  static createLmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

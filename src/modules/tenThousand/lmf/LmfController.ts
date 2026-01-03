import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmfs")
export default class LmfController {
  @operation({
    summary: "Get Lmfs",
  })
  @get()
  static getLmfs = procedure({
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

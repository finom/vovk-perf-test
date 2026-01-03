import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vcs")
export default class VcController {
  @operation({
    summary: "Get Vcs",
  })
  @get()
  static getVcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vc",
  })
  @post("{id}")
  static createVc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmfs")
export default class GmfController {
  @operation({
    summary: "Get Gmfs",
  })
  @get()
  static getGmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmf",
  })
  @post("{id}")
  static createGmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

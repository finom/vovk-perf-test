import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmfs")
export default class HmfController {
  @operation({
    summary: "Get Hmfs",
  })
  @get()
  static getHmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmf",
  })
  @post("{id}")
  static createHmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

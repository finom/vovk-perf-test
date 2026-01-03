import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hycs")
export default class HycController {
  @operation({
    summary: "Get Hycs",
  })
  @get()
  static getHycs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyc",
  })
  @post("{id}")
  static createHyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

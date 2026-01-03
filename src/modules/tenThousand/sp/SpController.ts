import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sps")
export default class SpController {
  @operation({
    summary: "Get Sps",
  })
  @get()
  static getSps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sp",
  })
  @post("{id}")
  static createSp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

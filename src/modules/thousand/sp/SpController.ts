import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sp")
export default class SpController {
  @operation({
    summary: "Get Sp",
  })
  @get()
  static getSp = procedure({
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

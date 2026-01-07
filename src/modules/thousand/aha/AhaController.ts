import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aha")
export default class AhaController {
  @operation({
    summary: "Get Aha",
  })
  @get()
  static getAha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aha",
  })
  @post("{id}")
  static createAha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

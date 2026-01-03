import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abus")
export default class AbuController {
  @operation({
    summary: "Get Abus",
  })
  @get()
  static getAbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abu",
  })
  @post("{id}")
  static createAbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

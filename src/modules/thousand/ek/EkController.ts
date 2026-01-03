import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eks")
export default class EkController {
  @operation({
    summary: "Get Eks",
  })
  @get()
  static getEks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ek",
  })
  @post("{id}")
  static createEk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

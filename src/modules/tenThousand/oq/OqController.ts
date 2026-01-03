import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oqs")
export default class OqController {
  @operation({
    summary: "Get Oqs",
  })
  @get()
  static getOqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oq",
  })
  @post("{id}")
  static createOq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

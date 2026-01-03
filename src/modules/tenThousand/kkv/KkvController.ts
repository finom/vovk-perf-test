import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkvs")
export default class KkvController {
  @operation({
    summary: "Get Kkvs",
  })
  @get()
  static getKkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkv",
  })
  @post("{id}")
  static createKkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

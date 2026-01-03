import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akvs")
export default class AkvController {
  @operation({
    summary: "Get Akvs",
  })
  @get()
  static getAkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akv",
  })
  @post("{id}")
  static createAkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

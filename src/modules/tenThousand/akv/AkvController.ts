import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akv")
export default class AkvController {
  @operation({
    summary: "Get Akv",
  })
  @get()
  static getAkv = procedure({
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

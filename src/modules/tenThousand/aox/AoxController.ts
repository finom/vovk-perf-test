import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aox")
export default class AoxController {
  @operation({
    summary: "Get Aox",
  })
  @get()
  static getAox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aox",
  })
  @post("{id}")
  static createAox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

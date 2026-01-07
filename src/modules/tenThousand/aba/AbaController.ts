import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aba")
export default class AbaController {
  @operation({
    summary: "Get Aba",
  })
  @get()
  static getAba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aba",
  })
  @post("{id}")
  static createAba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

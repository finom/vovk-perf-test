import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anvs")
export default class AnvController {
  @operation({
    summary: "Get Anvs",
  })
  @get()
  static getAnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anv",
  })
  @post("{id}")
  static createAnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

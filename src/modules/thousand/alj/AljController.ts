import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aljs")
export default class AljController {
  @operation({
    summary: "Get Aljs",
  })
  @get()
  static getAljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alj",
  })
  @post("{id}")
  static createAlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

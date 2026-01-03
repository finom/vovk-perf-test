import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjs")
export default class HjController {
  @operation({
    summary: "Get Hjs",
  })
  @get()
  static getHjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hj",
  })
  @post("{id}")
  static createHj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

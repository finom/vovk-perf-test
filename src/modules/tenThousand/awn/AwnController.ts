import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awns")
export default class AwnController {
  @operation({
    summary: "Get Awns",
  })
  @get()
  static getAwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awn",
  })
  @post("{id}")
  static createAwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

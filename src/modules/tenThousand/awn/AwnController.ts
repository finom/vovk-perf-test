import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awn")
export default class AwnController {
  @operation({
    summary: "Get Awn",
  })
  @get()
  static getAwn = procedure({
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

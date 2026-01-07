import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bb")
export default class BbController {
  @operation({
    summary: "Get Bb",
  })
  @get()
  static getBb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bb",
  })
  @post("{id}")
  static createBb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

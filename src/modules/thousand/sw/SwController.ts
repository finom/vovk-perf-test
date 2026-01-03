import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sws")
export default class SwController {
  @operation({
    summary: "Get Sws",
  })
  @get()
  static getSws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sw",
  })
  @post("{id}")
  static createSw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

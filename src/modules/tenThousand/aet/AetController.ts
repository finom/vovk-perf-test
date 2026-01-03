import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aets")
export default class AetController {
  @operation({
    summary: "Get Aets",
  })
  @get()
  static getAets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aet",
  })
  @post("{id}")
  static createAet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

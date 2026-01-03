import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjos")
export default class BjoController {
  @operation({
    summary: "Get Bjos",
  })
  @get()
  static getBjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjo",
  })
  @post("{id}")
  static createBjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

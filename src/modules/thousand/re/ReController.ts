import { procedure, prefix, get, post, operation } from "vovk";

@prefix("re")
export default class ReController {
  @operation({
    summary: "Get Re",
  })
  @get()
  static getRe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Re",
  })
  @post("{id}")
  static createRe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njks")
export default class NjkController {
  @operation({
    summary: "Get Njks",
  })
  @get()
  static getNjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njk",
  })
  @post("{id}")
  static createNjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

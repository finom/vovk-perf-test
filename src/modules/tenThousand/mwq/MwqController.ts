import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwq")
export default class MwqController {
  @operation({
    summary: "Get Mwq",
  })
  @get()
  static getMwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwq",
  })
  @post("{id}")
  static createMwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

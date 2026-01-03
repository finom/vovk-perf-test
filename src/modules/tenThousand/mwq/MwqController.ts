import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwqs")
export default class MwqController {
  @operation({
    summary: "Get Mwqs",
  })
  @get()
  static getMwqs = procedure({
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

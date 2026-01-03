import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pqs")
export default class PqController {
  @operation({
    summary: "Get Pqs",
  })
  @get()
  static getPqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pq",
  })
  @post("{id}")
  static createPq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

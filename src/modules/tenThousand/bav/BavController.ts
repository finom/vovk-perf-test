import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bavs")
export default class BavController {
  @operation({
    summary: "Get Bavs",
  })
  @get()
  static getBavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bav",
  })
  @post("{id}")
  static createBav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

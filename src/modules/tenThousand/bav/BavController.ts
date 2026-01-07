import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bav")
export default class BavController {
  @operation({
    summary: "Get Bav",
  })
  @get()
  static getBav = procedure({
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

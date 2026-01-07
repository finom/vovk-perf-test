import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bei")
export default class BeiController {
  @operation({
    summary: "Get Bei",
  })
  @get()
  static getBei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bei",
  })
  @post("{id}")
  static createBei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvc")
export default class BvcController {
  @operation({
    summary: "Get Bvc",
  })
  @get()
  static getBvc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvc",
  })
  @post("{id}")
  static createBvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

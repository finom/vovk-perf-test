import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byas")
export default class ByaController {
  @operation({
    summary: "Get Byas",
  })
  @get()
  static getByas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bya",
  })
  @post("{id}")
  static createBya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

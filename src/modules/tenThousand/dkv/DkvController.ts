import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkv")
export default class DkvController {
  @operation({
    summary: "Get Dkv",
  })
  @get()
  static getDkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkv",
  })
  @post("{id}")
  static createDkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

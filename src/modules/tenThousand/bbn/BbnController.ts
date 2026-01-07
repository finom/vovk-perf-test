import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbn")
export default class BbnController {
  @operation({
    summary: "Get Bbn",
  })
  @get()
  static getBbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbn",
  })
  @post("{id}")
  static createBbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

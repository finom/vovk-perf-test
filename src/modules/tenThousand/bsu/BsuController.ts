import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsu")
export default class BsuController {
  @operation({
    summary: "Get Bsu",
  })
  @get()
  static getBsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsu",
  })
  @post("{id}")
  static createBsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

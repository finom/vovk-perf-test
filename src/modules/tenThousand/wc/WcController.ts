import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wc")
export default class WcController {
  @operation({
    summary: "Get Wc",
  })
  @get()
  static getWc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wc",
  })
  @post("{id}")
  static createWc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

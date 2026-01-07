import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wq")
export default class WqController {
  @operation({
    summary: "Get Wq",
  })
  @get()
  static getWq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wq",
  })
  @post("{id}")
  static createWq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btws")
export default class BtwController {
  @operation({
    summary: "Get Btws",
  })
  @get()
  static getBtws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btw",
  })
  @post("{id}")
  static createBtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

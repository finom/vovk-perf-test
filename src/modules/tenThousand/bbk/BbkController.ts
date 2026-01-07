import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbk")
export default class BbkController {
  @operation({
    summary: "Get Bbk",
  })
  @get()
  static getBbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbk",
  })
  @post("{id}")
  static createBbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

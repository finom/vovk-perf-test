import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbq")
export default class BbqController {
  @operation({
    summary: "Get Bbq",
  })
  @get()
  static getBbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbq",
  })
  @post("{id}")
  static createBbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

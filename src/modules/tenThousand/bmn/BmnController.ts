import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmn")
export default class BmnController {
  @operation({
    summary: "Get Bmn",
  })
  @get()
  static getBmn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmn",
  })
  @post("{id}")
  static createBmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbrs")
export default class BbrController {
  @operation({
    summary: "Get Bbrs",
  })
  @get()
  static getBbrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbr",
  })
  @post("{id}")
  static createBbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

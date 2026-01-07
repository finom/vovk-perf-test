import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbr")
export default class BbrController {
  @operation({
    summary: "Get Bbr",
  })
  @get()
  static getBbr = procedure({
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

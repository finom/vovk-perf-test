import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbr")
export default class LbrController {
  @operation({
    summary: "Get Lbr",
  })
  @get()
  static getLbr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbr",
  })
  @post("{id}")
  static createLbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

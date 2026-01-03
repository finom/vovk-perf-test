import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbrs")
export default class LbrController {
  @operation({
    summary: "Get Lbrs",
  })
  @get()
  static getLbrs = procedure({
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

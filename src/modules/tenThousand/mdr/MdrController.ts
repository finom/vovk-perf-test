import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdrs")
export default class MdrController {
  @operation({
    summary: "Get Mdrs",
  })
  @get()
  static getMdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdr",
  })
  @post("{id}")
  static createMdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

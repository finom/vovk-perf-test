import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biv")
export default class BivController {
  @operation({
    summary: "Get Biv",
  })
  @get()
  static getBiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biv",
  })
  @post("{id}")
  static createBiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

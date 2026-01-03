import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brrs")
export default class BrrController {
  @operation({
    summary: "Get Brrs",
  })
  @get()
  static getBrrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brr",
  })
  @post("{id}")
  static createBrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

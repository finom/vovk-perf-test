import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzd")
export default class BzdController {
  @operation({
    summary: "Get Bzd",
  })
  @get()
  static getBzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzd",
  })
  @post("{id}")
  static createBzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

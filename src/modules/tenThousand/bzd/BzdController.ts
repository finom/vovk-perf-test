import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzds")
export default class BzdController {
  @operation({
    summary: "Get Bzds",
  })
  @get()
  static getBzds = procedure({
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

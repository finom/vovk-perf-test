import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqk")
export default class FqkController {
  @operation({
    summary: "Get Fqk",
  })
  @get()
  static getFqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqk",
  })
  @post("{id}")
  static createFqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

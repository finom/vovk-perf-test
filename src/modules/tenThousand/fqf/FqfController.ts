import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqf")
export default class FqfController {
  @operation({
    summary: "Get Fqf",
  })
  @get()
  static getFqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqf",
  })
  @post("{id}")
  static createFqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

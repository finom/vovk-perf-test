import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwa")
export default class FwaController {
  @operation({
    summary: "Get Fwa",
  })
  @get()
  static getFwa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwa",
  })
  @post("{id}")
  static createFwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

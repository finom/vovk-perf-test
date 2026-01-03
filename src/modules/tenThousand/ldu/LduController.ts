import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldus")
export default class LduController {
  @operation({
    summary: "Get Ldus",
  })
  @get()
  static getLdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldu",
  })
  @post("{id}")
  static createLdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fi")
export default class FiController {
  @operation({
    summary: "Get Fi",
  })
  @get()
  static getFi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fi",
  })
  @post("{id}")
  static createFi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

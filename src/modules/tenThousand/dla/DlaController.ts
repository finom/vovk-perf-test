import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dla")
export default class DlaController {
  @operation({
    summary: "Get Dla",
  })
  @get()
  static getDla = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dla",
  })
  @post("{id}")
  static createDla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

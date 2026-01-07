import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyn")
export default class FynController {
  @operation({
    summary: "Get Fyn",
  })
  @get()
  static getFyn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyn",
  })
  @post("{id}")
  static createFyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

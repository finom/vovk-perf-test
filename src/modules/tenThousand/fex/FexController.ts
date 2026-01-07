import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fex")
export default class FexController {
  @operation({
    summary: "Get Fex",
  })
  @get()
  static getFex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fex",
  })
  @post("{id}")
  static createFex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

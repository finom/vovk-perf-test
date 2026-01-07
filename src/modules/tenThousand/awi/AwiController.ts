import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awi")
export default class AwiController {
  @operation({
    summary: "Get Awi",
  })
  @get()
  static getAwi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awi",
  })
  @post("{id}")
  static createAwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

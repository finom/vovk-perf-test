import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgy")
export default class FgyController {
  @operation({
    summary: "Get Fgy",
  })
  @get()
  static getFgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgy",
  })
  @post("{id}")
  static createFgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

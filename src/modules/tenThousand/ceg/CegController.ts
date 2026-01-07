import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceg")
export default class CegController {
  @operation({
    summary: "Get Ceg",
  })
  @get()
  static getCeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ceg",
  })
  @post("{id}")
  static createCeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

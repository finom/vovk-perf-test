import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvgs")
export default class HvgController {
  @operation({
    summary: "Get Hvgs",
  })
  @get()
  static getHvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvg",
  })
  @post("{id}")
  static createHvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

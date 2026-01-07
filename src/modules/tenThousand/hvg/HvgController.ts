import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvg")
export default class HvgController {
  @operation({
    summary: "Get Hvg",
  })
  @get()
  static getHvg = procedure({
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

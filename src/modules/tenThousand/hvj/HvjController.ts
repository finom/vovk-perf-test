import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvjs")
export default class HvjController {
  @operation({
    summary: "Get Hvjs",
  })
  @get()
  static getHvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvj",
  })
  @post("{id}")
  static createHvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

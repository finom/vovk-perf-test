import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvj")
export default class HvjController {
  @operation({
    summary: "Get Hvj",
  })
  @get()
  static getHvj = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ur")
export default class UrController {
  @operation({
    summary: "Get Ur",
  })
  @get()
  static getUr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ur",
  })
  @post("{id}")
  static createUr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

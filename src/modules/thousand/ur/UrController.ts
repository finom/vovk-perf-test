import { procedure, prefix, get, post, operation } from "vovk";

@prefix("urs")
export default class UrController {
  @operation({
    summary: "Get Urs",
  })
  @get()
  static getUrs = procedure({
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

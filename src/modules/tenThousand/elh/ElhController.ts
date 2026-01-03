import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elhs")
export default class ElhController {
  @operation({
    summary: "Get Elhs",
  })
  @get()
  static getElhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elh",
  })
  @post("{id}")
  static createElh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

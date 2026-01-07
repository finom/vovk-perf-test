import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glj")
export default class GljController {
  @operation({
    summary: "Get Glj",
  })
  @get()
  static getGlj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glj",
  })
  @post("{id}")
  static createGlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

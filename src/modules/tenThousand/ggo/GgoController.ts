import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggo")
export default class GgoController {
  @operation({
    summary: "Get Ggo",
  })
  @get()
  static getGgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggo",
  })
  @post("{id}")
  static createGgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

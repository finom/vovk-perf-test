import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyd")
export default class GydController {
  @operation({
    summary: "Get Gyd",
  })
  @get()
  static getGyd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyd",
  })
  @post("{id}")
  static createGyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alb")
export default class AlbController {
  @operation({
    summary: "Get Alb",
  })
  @get()
  static getAlb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alb",
  })
  @post("{id}")
  static createAlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

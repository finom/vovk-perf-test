import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghes")
export default class GheController {
  @operation({
    summary: "Get Ghes",
  })
  @get()
  static getGhes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghe",
  })
  @post("{id}")
  static createGhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clf")
export default class ClfController {
  @operation({
    summary: "Get Clf",
  })
  @get()
  static getClf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clf",
  })
  @post("{id}")
  static createClf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

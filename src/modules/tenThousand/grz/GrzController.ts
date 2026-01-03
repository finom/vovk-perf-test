import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grzs")
export default class GrzController {
  @operation({
    summary: "Get Grzs",
  })
  @get()
  static getGrzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grz",
  })
  @post("{id}")
  static createGrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

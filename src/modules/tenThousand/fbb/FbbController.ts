import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbbs")
export default class FbbController {
  @operation({
    summary: "Get Fbbs",
  })
  @get()
  static getFbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbb",
  })
  @post("{id}")
  static createFbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

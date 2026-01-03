import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anies")
export default class AnyController {
  @operation({
    summary: "Get Anies",
  })
  @get()
  static getAnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Any",
  })
  @post("{id}")
  static createAny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

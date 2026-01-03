import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afbs")
export default class AfbController {
  @operation({
    summary: "Get Afbs",
  })
  @get()
  static getAfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afb",
  })
  @post("{id}")
  static createAfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

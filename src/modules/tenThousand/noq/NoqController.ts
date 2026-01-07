import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noq")
export default class NoqController {
  @operation({
    summary: "Get Noq",
  })
  @get()
  static getNoq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noq",
  })
  @post("{id}")
  static createNoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

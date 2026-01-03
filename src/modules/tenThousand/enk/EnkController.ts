import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enks")
export default class EnkController {
  @operation({
    summary: "Get Enks",
  })
  @get()
  static getEnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enk",
  })
  @post("{id}")
  static createEnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

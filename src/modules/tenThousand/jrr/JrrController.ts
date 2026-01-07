import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrr")
export default class JrrController {
  @operation({
    summary: "Get Jrr",
  })
  @get()
  static getJrr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrr",
  })
  @post("{id}")
  static createJrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

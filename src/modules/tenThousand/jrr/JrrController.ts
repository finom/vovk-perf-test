import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrrs")
export default class JrrController {
  @operation({
    summary: "Get Jrrs",
  })
  @get()
  static getJrrs = procedure({
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

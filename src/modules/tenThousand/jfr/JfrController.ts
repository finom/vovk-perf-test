import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfrs")
export default class JfrController {
  @operation({
    summary: "Get Jfrs",
  })
  @get()
  static getJfrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfr",
  })
  @post("{id}")
  static createJfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

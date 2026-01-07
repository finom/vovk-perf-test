import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrb")
export default class JrbController {
  @operation({
    summary: "Get Jrb",
  })
  @get()
  static getJrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrb",
  })
  @post("{id}")
  static createJrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

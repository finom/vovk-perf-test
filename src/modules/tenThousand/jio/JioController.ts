import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jio")
export default class JioController {
  @operation({
    summary: "Get Jio",
  })
  @get()
  static getJio = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jio",
  })
  @post("{id}")
  static createJio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

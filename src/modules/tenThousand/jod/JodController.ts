import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jod")
export default class JodController {
  @operation({
    summary: "Get Jod",
  })
  @get()
  static getJod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jod",
  })
  @post("{id}")
  static createJod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

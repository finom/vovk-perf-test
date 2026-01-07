import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxy")
export default class JxyController {
  @operation({
    summary: "Get Jxy",
  })
  @get()
  static getJxy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxy",
  })
  @post("{id}")
  static createJxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

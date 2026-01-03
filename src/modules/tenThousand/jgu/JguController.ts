import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgus")
export default class JguController {
  @operation({
    summary: "Get Jgus",
  })
  @get()
  static getJgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgu",
  })
  @post("{id}")
  static createJgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

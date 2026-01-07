import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsu")
export default class JsuController {
  @operation({
    summary: "Get Jsu",
  })
  @get()
  static getJsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsu",
  })
  @post("{id}")
  static createJsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

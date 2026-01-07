import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdx")
export default class JdxController {
  @operation({
    summary: "Get Jdx",
  })
  @get()
  static getJdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdx",
  })
  @post("{id}")
  static createJdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

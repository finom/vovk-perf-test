import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfe")
export default class JfeController {
  @operation({
    summary: "Get Jfe",
  })
  @get()
  static getJfe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfe",
  })
  @post("{id}")
  static createJfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

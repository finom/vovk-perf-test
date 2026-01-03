import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jks")
export default class JksController {
  @operation({
    summary: "Get Jks",
  })
  @get()
  static getJks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jks",
  })
  @post("{id}")
  static createJks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

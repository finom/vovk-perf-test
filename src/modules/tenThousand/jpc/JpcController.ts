import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpc")
export default class JpcController {
  @operation({
    summary: "Get Jpc",
  })
  @get()
  static getJpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpc",
  })
  @post("{id}")
  static createJpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

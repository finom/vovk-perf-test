import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jigs")
export default class JigController {
  @operation({
    summary: "Get Jigs",
  })
  @get()
  static getJigs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jig",
  })
  @post("{id}")
  static createJig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

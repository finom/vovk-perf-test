import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfi")
export default class JfiController {
  @operation({
    summary: "Get Jfi",
  })
  @get()
  static getJfi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfi",
  })
  @post("{id}")
  static createJfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

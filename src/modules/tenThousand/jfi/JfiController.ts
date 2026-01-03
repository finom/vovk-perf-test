import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfis")
export default class JfiController {
  @operation({
    summary: "Get Jfis",
  })
  @get()
  static getJfis = procedure({
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

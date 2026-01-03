import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jums")
export default class JumController {
  @operation({
    summary: "Get Jums",
  })
  @get()
  static getJums = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jum",
  })
  @post("{id}")
  static createJum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

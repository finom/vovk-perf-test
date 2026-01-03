import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyrs")
export default class JyrController {
  @operation({
    summary: "Get Jyrs",
  })
  @get()
  static getJyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyr",
  })
  @post("{id}")
  static createJyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

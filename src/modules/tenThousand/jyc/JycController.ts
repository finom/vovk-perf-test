import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyc")
export default class JycController {
  @operation({
    summary: "Get Jyc",
  })
  @get()
  static getJyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyc",
  })
  @post("{id}")
  static createJyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

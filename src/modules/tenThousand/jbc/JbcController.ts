import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbc")
export default class JbcController {
  @operation({
    summary: "Get Jbc",
  })
  @get()
  static getJbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbc",
  })
  @post("{id}")
  static createJbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jno")
export default class JnoController {
  @operation({
    summary: "Get Jno",
  })
  @get()
  static getJno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jno",
  })
  @post("{id}")
  static createJno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

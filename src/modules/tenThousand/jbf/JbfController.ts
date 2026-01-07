import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbf")
export default class JbfController {
  @operation({
    summary: "Get Jbf",
  })
  @get()
  static getJbf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbf",
  })
  @post("{id}")
  static createJbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

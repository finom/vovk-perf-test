import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkf")
export default class JkfController {
  @operation({
    summary: "Get Jkf",
  })
  @get()
  static getJkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkf",
  })
  @post("{id}")
  static createJkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

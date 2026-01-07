import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbd")
export default class JbdController {
  @operation({
    summary: "Get Jbd",
  })
  @get()
  static getJbd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbd",
  })
  @post("{id}")
  static createJbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

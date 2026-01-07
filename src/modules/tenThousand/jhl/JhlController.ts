import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhl")
export default class JhlController {
  @operation({
    summary: "Get Jhl",
  })
  @get()
  static getJhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhl",
  })
  @post("{id}")
  static createJhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

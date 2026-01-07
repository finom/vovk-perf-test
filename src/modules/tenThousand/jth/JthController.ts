import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jth")
export default class JthController {
  @operation({
    summary: "Get Jth",
  })
  @get()
  static getJth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jth",
  })
  @post("{id}")
  static createJth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

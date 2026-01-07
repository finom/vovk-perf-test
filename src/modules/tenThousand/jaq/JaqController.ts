import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaq")
export default class JaqController {
  @operation({
    summary: "Get Jaq",
  })
  @get()
  static getJaq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaq",
  })
  @post("{id}")
  static createJaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

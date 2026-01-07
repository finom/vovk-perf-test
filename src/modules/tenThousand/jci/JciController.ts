import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jci")
export default class JciController {
  @operation({
    summary: "Get Jci",
  })
  @get()
  static getJci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jci",
  })
  @post("{id}")
  static createJci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

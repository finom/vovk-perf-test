import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jte")
export default class JteController {
  @operation({
    summary: "Get Jte",
  })
  @get()
  static getJte = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jte",
  })
  @post("{id}")
  static createJte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

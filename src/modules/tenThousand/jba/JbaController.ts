import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jba")
export default class JbaController {
  @operation({
    summary: "Get Jba",
  })
  @get()
  static getJba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jba",
  })
  @post("{id}")
  static createJba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jofs")
export default class JofController {
  @operation({
    summary: "Get Jofs",
  })
  @get()
  static getJofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jof",
  })
  @post("{id}")
  static createJof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

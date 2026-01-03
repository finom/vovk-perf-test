import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnjs")
export default class JnjController {
  @operation({
    summary: "Get Jnjs",
  })
  @get()
  static getJnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnj",
  })
  @post("{id}")
  static createJnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

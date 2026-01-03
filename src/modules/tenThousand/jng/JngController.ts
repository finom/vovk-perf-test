import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jngs")
export default class JngController {
  @operation({
    summary: "Get Jngs",
  })
  @get()
  static getJngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jng",
  })
  @post("{id}")
  static createJng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

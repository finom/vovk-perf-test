import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaxes")
export default class JaxController {
  @operation({
    summary: "Get Jaxes",
  })
  @get()
  static getJaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jax",
  })
  @post("{id}")
  static createJax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

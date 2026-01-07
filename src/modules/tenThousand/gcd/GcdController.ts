import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcd")
export default class GcdController {
  @operation({
    summary: "Get Gcd",
  })
  @get()
  static getGcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcd",
  })
  @post("{id}")
  static createGcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

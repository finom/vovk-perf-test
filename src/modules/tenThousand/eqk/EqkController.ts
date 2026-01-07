import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqk")
export default class EqkController {
  @operation({
    summary: "Get Eqk",
  })
  @get()
  static getEqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqk",
  })
  @post("{id}")
  static createEqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

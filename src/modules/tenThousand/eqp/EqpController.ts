import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqp")
export default class EqpController {
  @operation({
    summary: "Get Eqp",
  })
  @get()
  static getEqp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqp",
  })
  @post("{id}")
  static createEqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

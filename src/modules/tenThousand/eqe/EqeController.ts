import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqe")
export default class EqeController {
  @operation({
    summary: "Get Eqe",
  })
  @get()
  static getEqe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqe",
  })
  @post("{id}")
  static createEqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coxen")
export default class CoxController {
  @operation({
    summary: "Get Coxen",
  })
  @get()
  static getCoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cox",
  })
  @post("{id}")
  static createCox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

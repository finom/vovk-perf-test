import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inf")
export default class InfController {
  @operation({
    summary: "Get Inf",
  })
  @get()
  static getInf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inf",
  })
  @post("{id}")
  static createInf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

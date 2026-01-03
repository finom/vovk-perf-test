import { procedure, prefix, get, post, operation } from "vovk";

@prefix("infs")
export default class InfController {
  @operation({
    summary: "Get Infs",
  })
  @get()
  static getInfs = procedure({
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

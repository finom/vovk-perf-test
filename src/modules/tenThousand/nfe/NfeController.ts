import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfe")
export default class NfeController {
  @operation({
    summary: "Get Nfe",
  })
  @get()
  static getNfe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfe",
  })
  @post("{id}")
  static createNfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nne")
export default class NneController {
  @operation({
    summary: "Get Nne",
  })
  @get()
  static getNne = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nne",
  })
  @post("{id}")
  static createNne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

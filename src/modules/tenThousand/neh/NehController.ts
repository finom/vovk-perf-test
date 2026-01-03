import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nehs")
export default class NehController {
  @operation({
    summary: "Get Nehs",
  })
  @get()
  static getNehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neh",
  })
  @post("{id}")
  static createNeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

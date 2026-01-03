import { procedure, prefix, get, post, operation } from "vovk";

@prefix("injs")
export default class InjController {
  @operation({
    summary: "Get Injs",
  })
  @get()
  static getInjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inj",
  })
  @post("{id}")
  static createInj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

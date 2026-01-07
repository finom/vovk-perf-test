import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehl")
export default class EhlController {
  @operation({
    summary: "Get Ehl",
  })
  @get()
  static getEhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehl",
  })
  @post("{id}")
  static createEhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

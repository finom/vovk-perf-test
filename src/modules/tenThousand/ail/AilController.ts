import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ails")
export default class AilController {
  @operation({
    summary: "Get Ails",
  })
  @get()
  static getAils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ail",
  })
  @post("{id}")
  static createAil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

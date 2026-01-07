import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abd")
export default class AbdController {
  @operation({
    summary: "Get Abd",
  })
  @get()
  static getAbd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abd",
  })
  @post("{id}")
  static createAbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

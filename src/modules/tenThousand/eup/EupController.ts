import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eup")
export default class EupController {
  @operation({
    summary: "Get Eup",
  })
  @get()
  static getEup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eup",
  })
  @post("{id}")
  static createEup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

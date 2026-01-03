import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaws")
export default class EawController {
  @operation({
    summary: "Get Eaws",
  })
  @get()
  static getEaws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaw",
  })
  @post("{id}")
  static createEaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

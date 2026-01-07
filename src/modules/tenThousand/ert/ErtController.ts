import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ert")
export default class ErtController {
  @operation({
    summary: "Get Ert",
  })
  @get()
  static getErt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ert",
  })
  @post("{id}")
  static createErt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

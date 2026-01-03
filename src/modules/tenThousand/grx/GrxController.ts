import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grxes")
export default class GrxController {
  @operation({
    summary: "Get Grxes",
  })
  @get()
  static getGrxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grx",
  })
  @post("{id}")
  static createGrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grx")
export default class GrxController {
  @operation({
    summary: "Get Grx",
  })
  @get()
  static getGrx = procedure({
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

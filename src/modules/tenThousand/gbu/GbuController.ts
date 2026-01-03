import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbus")
export default class GbuController {
  @operation({
    summary: "Get Gbus",
  })
  @get()
  static getGbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbu",
  })
  @post("{id}")
  static createGbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

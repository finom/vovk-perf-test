import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gne")
export default class GneController {
  @operation({
    summary: "Get Gne",
  })
  @get()
  static getGne = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gne",
  })
  @post("{id}")
  static createGne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

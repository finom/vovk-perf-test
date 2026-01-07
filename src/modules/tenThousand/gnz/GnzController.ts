import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnz")
export default class GnzController {
  @operation({
    summary: "Get Gnz",
  })
  @get()
  static getGnz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnz",
  })
  @post("{id}")
  static createGnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

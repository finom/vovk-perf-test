import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gro")
export default class GroController {
  @operation({
    summary: "Get Gro",
  })
  @get()
  static getGro = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gro",
  })
  @post("{id}")
  static createGro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

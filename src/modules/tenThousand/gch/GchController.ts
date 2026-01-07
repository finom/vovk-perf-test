import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gch")
export default class GchController {
  @operation({
    summary: "Get Gch",
  })
  @get()
  static getGch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gch",
  })
  @post("{id}")
  static createGch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

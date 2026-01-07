import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsk")
export default class GskController {
  @operation({
    summary: "Get Gsk",
  })
  @get()
  static getGsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsk",
  })
  @post("{id}")
  static createGsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

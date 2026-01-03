import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsks")
export default class GskController {
  @operation({
    summary: "Get Gsks",
  })
  @get()
  static getGsks = procedure({
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

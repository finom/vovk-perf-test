import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gibs")
export default class GibController {
  @operation({
    summary: "Get Gibs",
  })
  @get()
  static getGibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gib",
  })
  @post("{id}")
  static createGib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

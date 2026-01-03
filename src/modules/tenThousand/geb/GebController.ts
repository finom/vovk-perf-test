import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gebs")
export default class GebController {
  @operation({
    summary: "Get Gebs",
  })
  @get()
  static getGebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Geb",
  })
  @post("{id}")
  static createGeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

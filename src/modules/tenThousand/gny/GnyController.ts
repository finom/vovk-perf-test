import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gny")
export default class GnyController {
  @operation({
    summary: "Get Gny",
  })
  @get()
  static getGny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gny",
  })
  @post("{id}")
  static createGny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

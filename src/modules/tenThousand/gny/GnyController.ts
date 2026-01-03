import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnies")
export default class GnyController {
  @operation({
    summary: "Get Gnies",
  })
  @get()
  static getGnies = procedure({
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

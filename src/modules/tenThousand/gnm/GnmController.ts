import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnms")
export default class GnmController {
  @operation({
    summary: "Get Gnms",
  })
  @get()
  static getGnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnm",
  })
  @post("{id}")
  static createGnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

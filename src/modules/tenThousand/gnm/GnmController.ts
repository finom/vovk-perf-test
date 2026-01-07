import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnm")
export default class GnmController {
  @operation({
    summary: "Get Gnm",
  })
  @get()
  static getGnm = procedure({
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

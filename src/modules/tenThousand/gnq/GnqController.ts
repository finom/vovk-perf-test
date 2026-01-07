import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnq")
export default class GnqController {
  @operation({
    summary: "Get Gnq",
  })
  @get()
  static getGnq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnq",
  })
  @post("{id}")
  static createGnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

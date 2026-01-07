import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flm")
export default class FlmController {
  @operation({
    summary: "Get Flm",
  })
  @get()
  static getFlm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flm",
  })
  @post("{id}")
  static createFlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

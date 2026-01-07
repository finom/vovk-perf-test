import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flq")
export default class FlqController {
  @operation({
    summary: "Get Flq",
  })
  @get()
  static getFlq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flq",
  })
  @post("{id}")
  static createFlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

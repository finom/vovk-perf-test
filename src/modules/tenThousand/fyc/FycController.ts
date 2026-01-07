import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyc")
export default class FycController {
  @operation({
    summary: "Get Fyc",
  })
  @get()
  static getFyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyc",
  })
  @post("{id}")
  static createFyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

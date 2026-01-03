import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcis")
export default class FciController {
  @operation({
    summary: "Get Fcis",
  })
  @get()
  static getFcis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fci",
  })
  @post("{id}")
  static createFci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmis")
export default class NmiController {
  @operation({
    summary: "Get Nmis",
  })
  @get()
  static getNmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmi",
  })
  @post("{id}")
  static createNmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

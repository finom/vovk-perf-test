import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmi")
export default class NmiController {
  @operation({
    summary: "Get Nmi",
  })
  @get()
  static getNmi = procedure({
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

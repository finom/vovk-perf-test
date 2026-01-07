import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nby")
export default class NbyController {
  @operation({
    summary: "Get Nby",
  })
  @get()
  static getNby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nby",
  })
  @post("{id}")
  static createNby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

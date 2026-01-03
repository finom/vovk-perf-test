import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhs")
export default class NhsController {
  @operation({
    summary: "Get Nhs",
  })
  @get()
  static getNhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhs",
  })
  @post("{id}")
  static createNhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhy")
export default class FhyController {
  @operation({
    summary: "Get Fhy",
  })
  @get()
  static getFhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhy",
  })
  @post("{id}")
  static createFhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

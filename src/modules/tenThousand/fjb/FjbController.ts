import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjb")
export default class FjbController {
  @operation({
    summary: "Get Fjb",
  })
  @get()
  static getFjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjb",
  })
  @post("{id}")
  static createFjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

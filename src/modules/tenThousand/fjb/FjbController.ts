import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjbs")
export default class FjbController {
  @operation({
    summary: "Get Fjbs",
  })
  @get()
  static getFjbs = procedure({
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

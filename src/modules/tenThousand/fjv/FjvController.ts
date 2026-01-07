import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjv")
export default class FjvController {
  @operation({
    summary: "Get Fjv",
  })
  @get()
  static getFjv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjv",
  })
  @post("{id}")
  static createFjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

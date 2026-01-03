import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjhs")
export default class FjhController {
  @operation({
    summary: "Get Fjhs",
  })
  @get()
  static getFjhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjh",
  })
  @post("{id}")
  static createFjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

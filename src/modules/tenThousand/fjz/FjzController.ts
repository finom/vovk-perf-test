import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjz")
export default class FjzController {
  @operation({
    summary: "Get Fjz",
  })
  @get()
  static getFjz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjz",
  })
  @post("{id}")
  static createFjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

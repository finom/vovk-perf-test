import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjr")
export default class FjrController {
  @operation({
    summary: "Get Fjr",
  })
  @get()
  static getFjr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjr",
  })
  @post("{id}")
  static createFjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

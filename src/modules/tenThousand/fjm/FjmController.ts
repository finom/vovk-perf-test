import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjm")
export default class FjmController {
  @operation({
    summary: "Get Fjm",
  })
  @get()
  static getFjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjm",
  })
  @post("{id}")
  static createFjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

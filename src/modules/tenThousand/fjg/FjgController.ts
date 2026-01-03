import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjgs")
export default class FjgController {
  @operation({
    summary: "Get Fjgs",
  })
  @get()
  static getFjgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjg",
  })
  @post("{id}")
  static createFjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

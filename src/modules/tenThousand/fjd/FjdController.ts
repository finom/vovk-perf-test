import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjd")
export default class FjdController {
  @operation({
    summary: "Get Fjd",
  })
  @get()
  static getFjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjd",
  })
  @post("{id}")
  static createFjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

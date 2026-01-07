import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjn")
export default class FjnController {
  @operation({
    summary: "Get Fjn",
  })
  @get()
  static getFjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjn",
  })
  @post("{id}")
  static createFjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

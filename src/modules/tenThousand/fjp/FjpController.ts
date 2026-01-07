import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjp")
export default class FjpController {
  @operation({
    summary: "Get Fjp",
  })
  @get()
  static getFjp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjp",
  })
  @post("{id}")
  static createFjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

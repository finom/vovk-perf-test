import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjw")
export default class FjwController {
  @operation({
    summary: "Get Fjw",
  })
  @get()
  static getFjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjw",
  })
  @post("{id}")
  static createFjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

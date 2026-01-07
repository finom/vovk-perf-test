import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjc")
export default class FjcController {
  @operation({
    summary: "Get Fjc",
  })
  @get()
  static getFjc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjc",
  })
  @post("{id}")
  static createFjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

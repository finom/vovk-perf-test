import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjl")
export default class FjlController {
  @operation({
    summary: "Get Fjl",
  })
  @get()
  static getFjl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjl",
  })
  @post("{id}")
  static createFjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

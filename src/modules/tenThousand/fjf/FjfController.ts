import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjfs")
export default class FjfController {
  @operation({
    summary: "Get Fjfs",
  })
  @get()
  static getFjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjf",
  })
  @post("{id}")
  static createFjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

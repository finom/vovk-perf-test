import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjq")
export default class FjqController {
  @operation({
    summary: "Get Fjq",
  })
  @get()
  static getFjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjq",
  })
  @post("{id}")
  static createFjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

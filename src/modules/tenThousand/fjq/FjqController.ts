import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjqs")
export default class FjqController {
  @operation({
    summary: "Get Fjqs",
  })
  @get()
  static getFjqs = procedure({
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

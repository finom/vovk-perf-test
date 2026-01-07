import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjy")
export default class FjyController {
  @operation({
    summary: "Get Fjy",
  })
  @get()
  static getFjy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjy",
  })
  @post("{id}")
  static createFjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

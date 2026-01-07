import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjx")
export default class FjxController {
  @operation({
    summary: "Get Fjx",
  })
  @get()
  static getFjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjx",
  })
  @post("{id}")
  static createFjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

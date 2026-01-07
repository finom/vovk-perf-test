import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjt")
export default class FjtController {
  @operation({
    summary: "Get Fjt",
  })
  @get()
  static getFjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjt",
  })
  @post("{id}")
  static createFjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

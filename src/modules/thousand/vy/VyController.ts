import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vies")
export default class VyController {
  @operation({
    summary: "Get Vies",
  })
  @get()
  static getVies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vy",
  })
  @post("{id}")
  static createVy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

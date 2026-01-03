import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grfs")
export default class GrfController {
  @operation({
    summary: "Get Grfs",
  })
  @get()
  static getGrfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grf",
  })
  @post("{id}")
  static createGrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

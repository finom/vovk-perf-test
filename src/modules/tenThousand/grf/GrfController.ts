import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grf")
export default class GrfController {
  @operation({
    summary: "Get Grf",
  })
  @get()
  static getGrf = procedure({
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

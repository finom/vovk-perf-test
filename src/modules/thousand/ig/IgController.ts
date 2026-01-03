import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igs")
export default class IgController {
  @operation({
    summary: "Get Igs",
  })
  @get()
  static getIgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ig",
  })
  @post("{id}")
  static createIg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

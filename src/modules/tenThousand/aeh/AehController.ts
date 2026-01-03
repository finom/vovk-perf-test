import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aehs")
export default class AehController {
  @operation({
    summary: "Get Aehs",
  })
  @get()
  static getAehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeh",
  })
  @post("{id}")
  static createAeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

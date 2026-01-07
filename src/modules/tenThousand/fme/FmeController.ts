import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fme")
export default class FmeController {
  @operation({
    summary: "Get Fme",
  })
  @get()
  static getFme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fme",
  })
  @post("{id}")
  static createFme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

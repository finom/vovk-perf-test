import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmas")
export default class HmaController {
  @operation({
    summary: "Get Hmas",
  })
  @get()
  static getHmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hma",
  })
  @post("{id}")
  static createHma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

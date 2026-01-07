import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juv")
export default class JuvController {
  @operation({
    summary: "Get Juv",
  })
  @get()
  static getJuv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juv",
  })
  @post("{id}")
  static createJuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

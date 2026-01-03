import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aebs")
export default class AebController {
  @operation({
    summary: "Get Aebs",
  })
  @get()
  static getAebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeb",
  })
  @post("{id}")
  static createAeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

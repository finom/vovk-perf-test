import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agrs")
export default class AgrController {
  @operation({
    summary: "Get Agrs",
  })
  @get()
  static getAgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agr",
  })
  @post("{id}")
  static createAgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

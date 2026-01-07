import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acu")
export default class AcuController {
  @operation({
    summary: "Get Acu",
  })
  @get()
  static getAcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acu",
  })
  @post("{id}")
  static createAcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

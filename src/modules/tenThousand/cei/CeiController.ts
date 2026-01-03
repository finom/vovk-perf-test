import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceis")
export default class CeiController {
  @operation({
    summary: "Get Ceis",
  })
  @get()
  static getCeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cei",
  })
  @post("{id}")
  static createCei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

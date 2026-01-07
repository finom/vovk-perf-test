import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aia")
export default class AiaController {
  @operation({
    summary: "Get Aia",
  })
  @get()
  static getAia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aia",
  })
  @post("{id}")
  static createAia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

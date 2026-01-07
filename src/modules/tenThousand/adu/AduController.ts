import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adu")
export default class AduController {
  @operation({
    summary: "Get Adu",
  })
  @get()
  static getAdu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adu",
  })
  @post("{id}")
  static createAdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

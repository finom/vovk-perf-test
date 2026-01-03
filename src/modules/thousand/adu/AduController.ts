import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adus")
export default class AduController {
  @operation({
    summary: "Get Adus",
  })
  @get()
  static getAdus = procedure({
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

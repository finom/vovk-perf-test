import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aum")
export default class AumController {
  @operation({
    summary: "Get Aum",
  })
  @get()
  static getAum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aum",
  })
  @post("{id}")
  static createAum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

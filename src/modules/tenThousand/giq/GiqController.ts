import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giqs")
export default class GiqController {
  @operation({
    summary: "Get Giqs",
  })
  @get()
  static getGiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giq",
  })
  @post("{id}")
  static createGiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

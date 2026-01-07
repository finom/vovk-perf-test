import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwt")
export default class KwtController {
  @operation({
    summary: "Get Kwt",
  })
  @get()
  static getKwt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwt",
  })
  @post("{id}")
  static createKwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

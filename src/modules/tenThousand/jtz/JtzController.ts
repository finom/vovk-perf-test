import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtzs")
export default class JtzController {
  @operation({
    summary: "Get Jtzs",
  })
  @get()
  static getJtzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtz",
  })
  @post("{id}")
  static createJtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

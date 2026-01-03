import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnus")
export default class GnuController {
  @operation({
    summary: "Get Gnus",
  })
  @get()
  static getGnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnu",
  })
  @post("{id}")
  static createGnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

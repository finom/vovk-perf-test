import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwls")
export default class KwlController {
  @operation({
    summary: "Get Kwls",
  })
  @get()
  static getKwls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwl",
  })
  @post("{id}")
  static createKwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

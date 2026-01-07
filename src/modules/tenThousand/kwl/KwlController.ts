import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwl")
export default class KwlController {
  @operation({
    summary: "Get Kwl",
  })
  @get()
  static getKwl = procedure({
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

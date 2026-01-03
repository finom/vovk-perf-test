import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwcs")
export default class KwcController {
  @operation({
    summary: "Get Kwcs",
  })
  @get()
  static getKwcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwc",
  })
  @post("{id}")
  static createKwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

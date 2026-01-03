import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwps")
export default class KwpController {
  @operation({
    summary: "Get Kwps",
  })
  @get()
  static getKwps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwp",
  })
  @post("{id}")
  static createKwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

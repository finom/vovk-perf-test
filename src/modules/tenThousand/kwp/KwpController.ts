import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwp")
export default class KwpController {
  @operation({
    summary: "Get Kwp",
  })
  @get()
  static getKwp = procedure({
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

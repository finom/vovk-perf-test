import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eacs")
export default class EacController {
  @operation({
    summary: "Get Eacs",
  })
  @get()
  static getEacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eac",
  })
  @post("{id}")
  static createEac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

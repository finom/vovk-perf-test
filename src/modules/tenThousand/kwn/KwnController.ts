import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwn")
export default class KwnController {
  @operation({
    summary: "Get Kwn",
  })
  @get()
  static getKwn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwn",
  })
  @post("{id}")
  static createKwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

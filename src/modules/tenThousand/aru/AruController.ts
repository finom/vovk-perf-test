import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aru")
export default class AruController {
  @operation({
    summary: "Get Aru",
  })
  @get()
  static getAru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aru",
  })
  @post("{id}")
  static createAru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

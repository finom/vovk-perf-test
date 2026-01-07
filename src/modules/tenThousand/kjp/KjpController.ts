import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjp")
export default class KjpController {
  @operation({
    summary: "Get Kjp",
  })
  @get()
  static getKjp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjp",
  })
  @post("{id}")
  static createKjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

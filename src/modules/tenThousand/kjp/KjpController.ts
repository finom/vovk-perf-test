import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjps")
export default class KjpController {
  @operation({
    summary: "Get Kjps",
  })
  @get()
  static getKjps = procedure({
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

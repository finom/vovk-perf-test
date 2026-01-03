import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzms")
export default class GzmController {
  @operation({
    summary: "Get Gzms",
  })
  @get()
  static getGzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzm",
  })
  @post("{id}")
  static createGzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

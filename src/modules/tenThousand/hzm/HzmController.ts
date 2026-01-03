import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzms")
export default class HzmController {
  @operation({
    summary: "Get Hzms",
  })
  @get()
  static getHzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzm",
  })
  @post("{id}")
  static createHzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

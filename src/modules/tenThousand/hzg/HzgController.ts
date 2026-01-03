import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzgs")
export default class HzgController {
  @operation({
    summary: "Get Hzgs",
  })
  @get()
  static getHzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzg",
  })
  @post("{id}")
  static createHzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

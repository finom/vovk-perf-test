import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzcs")
export default class HzcController {
  @operation({
    summary: "Get Hzcs",
  })
  @get()
  static getHzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzc",
  })
  @post("{id}")
  static createHzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

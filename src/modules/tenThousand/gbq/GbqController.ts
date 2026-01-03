import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbqs")
export default class GbqController {
  @operation({
    summary: "Get Gbqs",
  })
  @get()
  static getGbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbq",
  })
  @post("{id}")
  static createGbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

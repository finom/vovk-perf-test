import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkrs")
export default class KkrController {
  @operation({
    summary: "Get Kkrs",
  })
  @get()
  static getKkrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkr",
  })
  @post("{id}")
  static createKkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

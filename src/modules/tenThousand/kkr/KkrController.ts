import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkr")
export default class KkrController {
  @operation({
    summary: "Get Kkr",
  })
  @get()
  static getKkr = procedure({
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

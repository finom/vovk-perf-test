import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkds")
export default class KkdController {
  @operation({
    summary: "Get Kkds",
  })
  @get()
  static getKkds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkd",
  })
  @post("{id}")
  static createKkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

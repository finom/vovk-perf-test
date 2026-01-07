import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhu")
export default class BhuController {
  @operation({
    summary: "Get Bhu",
  })
  @get()
  static getBhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhu",
  })
  @post("{id}")
  static createBhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

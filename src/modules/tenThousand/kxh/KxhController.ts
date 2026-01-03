import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxhs")
export default class KxhController {
  @operation({
    summary: "Get Kxhs",
  })
  @get()
  static getKxhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxh",
  })
  @post("{id}")
  static createKxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

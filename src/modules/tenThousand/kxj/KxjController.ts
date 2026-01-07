import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxj")
export default class KxjController {
  @operation({
    summary: "Get Kxj",
  })
  @get()
  static getKxj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxj",
  })
  @post("{id}")
  static createKxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

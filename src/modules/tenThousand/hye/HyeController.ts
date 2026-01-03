import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyes")
export default class HyeController {
  @operation({
    summary: "Get Hyes",
  })
  @get()
  static getHyes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hye",
  })
  @post("{id}")
  static createHye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

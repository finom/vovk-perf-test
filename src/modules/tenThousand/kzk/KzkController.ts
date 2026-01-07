import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzk")
export default class KzkController {
  @operation({
    summary: "Get Kzk",
  })
  @get()
  static getKzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzk",
  })
  @post("{id}")
  static createKzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

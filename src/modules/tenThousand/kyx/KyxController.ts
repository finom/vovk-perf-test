import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyxes")
export default class KyxController {
  @operation({
    summary: "Get Kyxes",
  })
  @get()
  static getKyxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyx",
  })
  @post("{id}")
  static createKyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

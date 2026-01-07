import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyx")
export default class KyxController {
  @operation({
    summary: "Get Kyx",
  })
  @get()
  static getKyx = procedure({
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

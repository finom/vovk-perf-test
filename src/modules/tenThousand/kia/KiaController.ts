import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kia")
export default class KiaController {
  @operation({
    summary: "Get Kia",
  })
  @get()
  static getKia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kia",
  })
  @post("{id}")
  static createKia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

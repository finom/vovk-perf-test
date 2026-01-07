import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekf")
export default class EkfController {
  @operation({
    summary: "Get Ekf",
  })
  @get()
  static getEkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekf",
  })
  @post("{id}")
  static createEkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

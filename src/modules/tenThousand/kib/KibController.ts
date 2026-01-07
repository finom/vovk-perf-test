import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kib")
export default class KibController {
  @operation({
    summary: "Get Kib",
  })
  @get()
  static getKib = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kib",
  })
  @post("{id}")
  static createKib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

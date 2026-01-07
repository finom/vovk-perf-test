import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgk")
export default class KgkController {
  @operation({
    summary: "Get Kgk",
  })
  @get()
  static getKgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgk",
  })
  @post("{id}")
  static createKgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

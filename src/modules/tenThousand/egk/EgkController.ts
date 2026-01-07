import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egk")
export default class EgkController {
  @operation({
    summary: "Get Egk",
  })
  @get()
  static getEgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egk",
  })
  @post("{id}")
  static createEgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enxes")
export default class EnxController {
  @operation({
    summary: "Get Enxes",
  })
  @get()
  static getEnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enx",
  })
  @post("{id}")
  static createEnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

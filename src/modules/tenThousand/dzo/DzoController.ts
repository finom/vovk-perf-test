import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzos")
export default class DzoController {
  @operation({
    summary: "Get Dzos",
  })
  @get()
  static getDzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzo",
  })
  @post("{id}")
  static createDzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

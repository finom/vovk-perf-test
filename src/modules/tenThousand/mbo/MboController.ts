import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbos")
export default class MboController {
  @operation({
    summary: "Get Mbos",
  })
  @get()
  static getMbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbo",
  })
  @post("{id}")
  static createMbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

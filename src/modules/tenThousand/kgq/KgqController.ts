import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgq")
export default class KgqController {
  @operation({
    summary: "Get Kgq",
  })
  @get()
  static getKgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgq",
  })
  @post("{id}")
  static createKgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

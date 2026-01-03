import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgqs")
export default class KgqController {
  @operation({
    summary: "Get Kgqs",
  })
  @get()
  static getKgqs = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcu")
export default class KcuController {
  @operation({
    summary: "Get Kcu",
  })
  @get()
  static getKcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcu",
  })
  @post("{id}")
  static createKcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

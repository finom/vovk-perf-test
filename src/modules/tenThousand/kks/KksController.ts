import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kks")
export default class KksController {
  @operation({
    summary: "Get Kks",
  })
  @get()
  static getKks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kks",
  })
  @post("{id}")
  static createKks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

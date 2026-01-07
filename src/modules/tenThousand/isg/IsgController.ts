import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isg")
export default class IsgController {
  @operation({
    summary: "Get Isg",
  })
  @get()
  static getIsg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isg",
  })
  @post("{id}")
  static createIsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

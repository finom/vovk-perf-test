import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kues")
export default class KueController {
  @operation({
    summary: "Get Kues",
  })
  @get()
  static getKues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kue",
  })
  @post("{id}")
  static createKue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

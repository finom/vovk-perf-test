import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hme")
export default class HmeController {
  @operation({
    summary: "Get Hme",
  })
  @get()
  static getHme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hme",
  })
  @post("{id}")
  static createHme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

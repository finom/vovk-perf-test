import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huus")
export default class HuuController {
  @operation({
    summary: "Get Huus",
  })
  @get()
  static getHuus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huu",
  })
  @post("{id}")
  static createHuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

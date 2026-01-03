import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kous")
export default class KouController {
  @operation({
    summary: "Get Kous",
  })
  @get()
  static getKous = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kou",
  })
  @post("{id}")
  static createKou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kou")
export default class KouController {
  @operation({
    summary: "Get Kou",
  })
  @get()
  static getKou = procedure({
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

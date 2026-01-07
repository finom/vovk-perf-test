import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwo")
export default class KwoController {
  @operation({
    summary: "Get Kwo",
  })
  @get()
  static getKwo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwo",
  })
  @post("{id}")
  static createKwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

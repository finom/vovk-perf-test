import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jou")
export default class JouController {
  @operation({
    summary: "Get Jou",
  })
  @get()
  static getJou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jou",
  })
  @post("{id}")
  static createJou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

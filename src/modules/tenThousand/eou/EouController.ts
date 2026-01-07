import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eou")
export default class EouController {
  @operation({
    summary: "Get Eou",
  })
  @get()
  static getEou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eou",
  })
  @post("{id}")
  static createEou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

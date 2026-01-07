import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ege")
export default class EgeController {
  @operation({
    summary: "Get Ege",
  })
  @get()
  static getEge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ege",
  })
  @post("{id}")
  static createEge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

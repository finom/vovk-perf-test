import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqa")
export default class AqaController {
  @operation({
    summary: "Get Aqa",
  })
  @get()
  static getAqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqa",
  })
  @post("{id}")
  static createAqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

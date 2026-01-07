import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aee")
export default class AeeController {
  @operation({
    summary: "Get Aee",
  })
  @get()
  static getAee = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aee",
  })
  @post("{id}")
  static createAee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afo")
export default class AfoController {
  @operation({
    summary: "Get Afo",
  })
  @get()
  static getAfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afo",
  })
  @post("{id}")
  static createAfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

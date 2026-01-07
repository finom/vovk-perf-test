import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebq")
export default class EbqController {
  @operation({
    summary: "Get Ebq",
  })
  @get()
  static getEbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebq",
  })
  @post("{id}")
  static createEbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

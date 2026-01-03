import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ils")
export default class IlsController {
  @operation({
    summary: "Get Ils",
  })
  @get()
  static getIls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ils",
  })
  @post("{id}")
  static createIls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

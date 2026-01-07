import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibb")
export default class IbbController {
  @operation({
    summary: "Get Ibb",
  })
  @get()
  static getIbb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibb",
  })
  @post("{id}")
  static createIbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

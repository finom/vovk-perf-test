import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iags")
export default class IagController {
  @operation({
    summary: "Get Iags",
  })
  @get()
  static getIags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iag",
  })
  @post("{id}")
  static createIag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuc")
export default class IucController {
  @operation({
    summary: "Get Iuc",
  })
  @get()
  static getIuc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuc",
  })
  @post("{id}")
  static createIuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

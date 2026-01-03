import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iucs")
export default class IucController {
  @operation({
    summary: "Get Iucs",
  })
  @get()
  static getIucs = procedure({
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

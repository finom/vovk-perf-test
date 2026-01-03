import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itzs")
export default class ItzController {
  @operation({
    summary: "Get Itzs",
  })
  @get()
  static getItzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itz",
  })
  @post("{id}")
  static createItz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

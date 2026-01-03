import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iefs")
export default class IefController {
  @operation({
    summary: "Get Iefs",
  })
  @get()
  static getIefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ief",
  })
  @post("{id}")
  static createIef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

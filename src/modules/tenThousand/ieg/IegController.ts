import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieg")
export default class IegController {
  @operation({
    summary: "Get Ieg",
  })
  @get()
  static getIeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ieg",
  })
  @post("{id}")
  static createIeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

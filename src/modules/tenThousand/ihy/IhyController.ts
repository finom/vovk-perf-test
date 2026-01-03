import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihies")
export default class IhyController {
  @operation({
    summary: "Get Ihies",
  })
  @get()
  static getIhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihy",
  })
  @post("{id}")
  static createIhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

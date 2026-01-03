import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igxes")
export default class IgxController {
  @operation({
    summary: "Get Igxes",
  })
  @get()
  static getIgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igx",
  })
  @post("{id}")
  static createIgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inn")
export default class InnController {
  @operation({
    summary: "Get Inn",
  })
  @get()
  static getInn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inn",
  })
  @post("{id}")
  static createInn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

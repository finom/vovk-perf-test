import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiz")
export default class IizController {
  @operation({
    summary: "Get Iiz",
  })
  @get()
  static getIiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iiz",
  })
  @post("{id}")
  static createIiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

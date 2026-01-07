import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyt")
export default class IytController {
  @operation({
    summary: "Get Iyt",
  })
  @get()
  static getIyt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyt",
  })
  @post("{id}")
  static createIyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

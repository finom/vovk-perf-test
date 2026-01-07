import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ize")
export default class IzeController {
  @operation({
    summary: "Get Ize",
  })
  @get()
  static getIze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ize",
  })
  @post("{id}")
  static createIze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

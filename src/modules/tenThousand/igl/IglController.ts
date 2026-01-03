import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igls")
export default class IglController {
  @operation({
    summary: "Get Igls",
  })
  @get()
  static getIgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igl",
  })
  @post("{id}")
  static createIgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqy")
export default class IqyController {
  @operation({
    summary: "Get Iqy",
  })
  @get()
  static getIqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqy",
  })
  @post("{id}")
  static createIqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

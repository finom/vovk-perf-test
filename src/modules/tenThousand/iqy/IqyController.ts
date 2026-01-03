import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqies")
export default class IqyController {
  @operation({
    summary: "Get Iqies",
  })
  @get()
  static getIqies = procedure({
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

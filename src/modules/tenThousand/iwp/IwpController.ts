import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwp")
export default class IwpController {
  @operation({
    summary: "Get Iwp",
  })
  @get()
  static getIwp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwp",
  })
  @post("{id}")
  static createIwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

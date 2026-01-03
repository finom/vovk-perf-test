import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwps")
export default class IwpController {
  @operation({
    summary: "Get Iwps",
  })
  @get()
  static getIwps = procedure({
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

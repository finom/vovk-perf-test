import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezps")
export default class EzpController {
  @operation({
    summary: "Get Ezps",
  })
  @get()
  static getEzps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezp",
  })
  @post("{id}")
  static createEzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

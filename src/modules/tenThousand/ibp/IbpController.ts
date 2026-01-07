import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibp")
export default class IbpController {
  @operation({
    summary: "Get Ibp",
  })
  @get()
  static getIbp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibp",
  })
  @post("{id}")
  static createIbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

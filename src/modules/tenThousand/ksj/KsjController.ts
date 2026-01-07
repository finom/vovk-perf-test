import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksj")
export default class KsjController {
  @operation({
    summary: "Get Ksj",
  })
  @get()
  static getKsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksj",
  })
  @post("{id}")
  static createKsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

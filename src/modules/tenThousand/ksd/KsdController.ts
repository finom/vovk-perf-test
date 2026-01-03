import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksds")
export default class KsdController {
  @operation({
    summary: "Get Ksds",
  })
  @get()
  static getKsds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksd",
  })
  @post("{id}")
  static createKsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

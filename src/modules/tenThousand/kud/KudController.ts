import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuds")
export default class KudController {
  @operation({
    summary: "Get Kuds",
  })
  @get()
  static getKuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kud",
  })
  @post("{id}")
  static createKud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

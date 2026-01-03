import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzns")
export default class KznController {
  @operation({
    summary: "Get Kzns",
  })
  @get()
  static getKzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzn",
  })
  @post("{id}")
  static createKzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

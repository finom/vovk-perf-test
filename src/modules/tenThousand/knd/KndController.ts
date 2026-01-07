import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knd")
export default class KndController {
  @operation({
    summary: "Get Knd",
  })
  @get()
  static getKnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knd",
  })
  @post("{id}")
  static createKnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

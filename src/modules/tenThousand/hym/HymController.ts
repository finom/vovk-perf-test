import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hym")
export default class HymController {
  @operation({
    summary: "Get Hym",
  })
  @get()
  static getHym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hym",
  })
  @post("{id}")
  static createHym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

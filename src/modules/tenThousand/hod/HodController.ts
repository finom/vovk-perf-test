import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hods")
export default class HodController {
  @operation({
    summary: "Get Hods",
  })
  @get()
  static getHods = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hod",
  })
  @post("{id}")
  static createHod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbds")
export default class HbdController {
  @operation({
    summary: "Get Hbds",
  })
  @get()
  static getHbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbd",
  })
  @post("{id}")
  static createHbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

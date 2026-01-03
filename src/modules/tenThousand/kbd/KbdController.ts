import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbds")
export default class KbdController {
  @operation({
    summary: "Get Kbds",
  })
  @get()
  static getKbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbd",
  })
  @post("{id}")
  static createKbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

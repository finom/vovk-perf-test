import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbd")
export default class KbdController {
  @operation({
    summary: "Get Kbd",
  })
  @get()
  static getKbd = procedure({
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

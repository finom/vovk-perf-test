import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaus")
export default class JauController {
  @operation({
    summary: "Get Jaus",
  })
  @get()
  static getJaus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jau",
  })
  @post("{id}")
  static createJau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

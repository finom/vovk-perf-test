import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jle")
export default class JleController {
  @operation({
    summary: "Get Jle",
  })
  @get()
  static getJle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jle",
  })
  @post("{id}")
  static createJle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

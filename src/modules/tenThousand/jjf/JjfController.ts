import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjfs")
export default class JjfController {
  @operation({
    summary: "Get Jjfs",
  })
  @get()
  static getJjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjf",
  })
  @post("{id}")
  static createJjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atfs")
export default class AtfController {
  @operation({
    summary: "Get Atfs",
  })
  @get()
  static getAtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atf",
  })
  @post("{id}")
  static createAtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

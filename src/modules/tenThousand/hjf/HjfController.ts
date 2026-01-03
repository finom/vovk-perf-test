import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjfs")
export default class HjfController {
  @operation({
    summary: "Get Hjfs",
  })
  @get()
  static getHjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjf",
  })
  @post("{id}")
  static createHjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

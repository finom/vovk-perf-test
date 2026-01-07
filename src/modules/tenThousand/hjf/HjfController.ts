import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjf")
export default class HjfController {
  @operation({
    summary: "Get Hjf",
  })
  @get()
  static getHjf = procedure({
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

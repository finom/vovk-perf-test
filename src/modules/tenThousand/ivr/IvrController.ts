import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivrs")
export default class IvrController {
  @operation({
    summary: "Get Ivrs",
  })
  @get()
  static getIvrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivr",
  })
  @post("{id}")
  static createIvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivr")
export default class IvrController {
  @operation({
    summary: "Get Ivr",
  })
  @get()
  static getIvr = procedure({
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

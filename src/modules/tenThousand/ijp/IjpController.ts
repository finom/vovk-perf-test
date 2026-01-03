import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijps")
export default class IjpController {
  @operation({
    summary: "Get Ijps",
  })
  @get()
  static getIjps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijp",
  })
  @post("{id}")
  static createIjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfd")
export default class NfdController {
  @operation({
    summary: "Get Nfd",
  })
  @get()
  static getNfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfd",
  })
  @post("{id}")
  static createNfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

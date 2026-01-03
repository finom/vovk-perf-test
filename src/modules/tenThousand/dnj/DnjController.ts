import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnjs")
export default class DnjController {
  @operation({
    summary: "Get Dnjs",
  })
  @get()
  static getDnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnj",
  })
  @post("{id}")
  static createDnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

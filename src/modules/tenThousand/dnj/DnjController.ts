import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnj")
export default class DnjController {
  @operation({
    summary: "Get Dnj",
  })
  @get()
  static getDnj = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnqs")
export default class DnqController {
  @operation({
    summary: "Get Dnqs",
  })
  @get()
  static getDnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnq",
  })
  @post("{id}")
  static createDnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

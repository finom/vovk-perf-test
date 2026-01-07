import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dub")
export default class DubController {
  @operation({
    summary: "Get Dub",
  })
  @get()
  static getDub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dub",
  })
  @post("{id}")
  static createDub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

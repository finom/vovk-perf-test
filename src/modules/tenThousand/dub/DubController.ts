import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dubs")
export default class DubController {
  @operation({
    summary: "Get Dubs",
  })
  @get()
  static getDubs = procedure({
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

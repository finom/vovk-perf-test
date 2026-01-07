import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igt")
export default class IgtController {
  @operation({
    summary: "Get Igt",
  })
  @get()
  static getIgt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igt",
  })
  @post("{id}")
  static createIgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avc")
export default class AvcController {
  @operation({
    summary: "Get Avc",
  })
  @get()
  static getAvc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avc",
  })
  @post("{id}")
  static createAvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

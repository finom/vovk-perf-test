import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfd")
export default class DfdController {
  @operation({
    summary: "Get Dfd",
  })
  @get()
  static getDfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfd",
  })
  @post("{id}")
  static createDfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

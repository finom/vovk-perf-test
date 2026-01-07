import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duc")
export default class DucController {
  @operation({
    summary: "Get Duc",
  })
  @get()
  static getDuc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duc",
  })
  @post("{id}")
  static createDuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

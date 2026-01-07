import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dih")
export default class DihController {
  @operation({
    summary: "Get Dih",
  })
  @get()
  static getDih = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dih",
  })
  @post("{id}")
  static createDih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

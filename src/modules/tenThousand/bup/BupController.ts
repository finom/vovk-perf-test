import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bup")
export default class BupController {
  @operation({
    summary: "Get Bup",
  })
  @get()
  static getBup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bup",
  })
  @post("{id}")
  static createBup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

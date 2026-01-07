import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buu")
export default class BuuController {
  @operation({
    summary: "Get Buu",
  })
  @get()
  static getBuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buu",
  })
  @post("{id}")
  static createBuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

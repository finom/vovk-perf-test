import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bax")
export default class BaxController {
  @operation({
    summary: "Get Bax",
  })
  @get()
  static getBax = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bax",
  })
  @post("{id}")
  static createBax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

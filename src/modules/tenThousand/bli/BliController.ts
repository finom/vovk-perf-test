import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bli")
export default class BliController {
  @operation({
    summary: "Get Bli",
  })
  @get()
  static getBli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bli",
  })
  @post("{id}")
  static createBli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

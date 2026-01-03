import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjfs")
export default class MjfController {
  @operation({
    summary: "Get Mjfs",
  })
  @get()
  static getMjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjf",
  })
  @post("{id}")
  static createMjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

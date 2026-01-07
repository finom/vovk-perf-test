import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkk")
export default class NkkController {
  @operation({
    summary: "Get Nkk",
  })
  @get()
  static getNkk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkk",
  })
  @post("{id}")
  static createNkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

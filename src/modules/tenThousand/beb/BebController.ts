import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beb")
export default class BebController {
  @operation({
    summary: "Get Beb",
  })
  @get()
  static getBeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beb",
  })
  @post("{id}")
  static createBeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bto")
export default class BtoController {
  @operation({
    summary: "Get Bto",
  })
  @get()
  static getBto = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bto",
  })
  @post("{id}")
  static createBto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

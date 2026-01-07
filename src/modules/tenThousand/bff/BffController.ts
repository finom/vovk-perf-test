import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bff")
export default class BffController {
  @operation({
    summary: "Get Bff",
  })
  @get()
  static getBff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bff",
  })
  @post("{id}")
  static createBff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

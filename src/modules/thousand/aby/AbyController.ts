import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aby")
export default class AbyController {
  @operation({
    summary: "Get Aby",
  })
  @get()
  static getAby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aby",
  })
  @post("{id}")
  static createAby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

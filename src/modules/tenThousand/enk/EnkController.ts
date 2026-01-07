import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enk")
export default class EnkController {
  @operation({
    summary: "Get Enk",
  })
  @get()
  static getEnk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enk",
  })
  @post("{id}")
  static createEnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

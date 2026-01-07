import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqp")
export default class FqpController {
  @operation({
    summary: "Get Fqp",
  })
  @get()
  static getFqp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqp",
  })
  @post("{id}")
  static createFqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

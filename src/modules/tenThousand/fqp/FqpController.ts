import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqps")
export default class FqpController {
  @operation({
    summary: "Get Fqps",
  })
  @get()
  static getFqps = procedure({
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

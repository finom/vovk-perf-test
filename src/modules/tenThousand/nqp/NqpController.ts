import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqps")
export default class NqpController {
  @operation({
    summary: "Get Nqps",
  })
  @get()
  static getNqps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqp",
  })
  @post("{id}")
  static createNqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

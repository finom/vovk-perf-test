import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqp")
export default class NqpController {
  @operation({
    summary: "Get Nqp",
  })
  @get()
  static getNqp = procedure({
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

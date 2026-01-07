import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmq")
export default class NmqController {
  @operation({
    summary: "Get Nmq",
  })
  @get()
  static getNmq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmq",
  })
  @post("{id}")
  static createNmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

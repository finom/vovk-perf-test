import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmqs")
export default class NmqController {
  @operation({
    summary: "Get Nmqs",
  })
  @get()
  static getNmqs = procedure({
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

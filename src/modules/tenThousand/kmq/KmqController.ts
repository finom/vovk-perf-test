import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmq")
export default class KmqController {
  @operation({
    summary: "Get Kmq",
  })
  @get()
  static getKmq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmq",
  })
  @post("{id}")
  static createKmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enqs")
export default class EnqController {
  @operation({
    summary: "Get Enqs",
  })
  @get()
  static getEnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enq",
  })
  @post("{id}")
  static createEnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

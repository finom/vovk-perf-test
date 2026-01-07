import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enq")
export default class EnqController {
  @operation({
    summary: "Get Enq",
  })
  @get()
  static getEnq = procedure({
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

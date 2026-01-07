import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckt")
export default class CktController {
  @operation({
    summary: "Get Ckt",
  })
  @get()
  static getCkt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckt",
  })
  @post("{id}")
  static createCkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

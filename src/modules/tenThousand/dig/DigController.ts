import { procedure, prefix, get, post, operation } from "vovk";

@prefix("digs")
export default class DigController {
  @operation({
    summary: "Get Digs",
  })
  @get()
  static getDigs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dig",
  })
  @post("{id}")
  static createDig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

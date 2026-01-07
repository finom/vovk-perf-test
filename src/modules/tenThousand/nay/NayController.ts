import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nay")
export default class NayController {
  @operation({
    summary: "Get Nay",
  })
  @get()
  static getNay = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nay",
  })
  @post("{id}")
  static createNay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

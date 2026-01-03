import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bays")
export default class BayController {
  @operation({
    summary: "Get Bays",
  })
  @get()
  static getBays = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bay",
  })
  @post("{id}")
  static createBay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

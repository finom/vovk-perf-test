import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flus")
export default class FluController {
  @operation({
    summary: "Get Flus",
  })
  @get()
  static getFlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flu",
  })
  @post("{id}")
  static createFlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hil")
export default class HilController {
  @operation({
    summary: "Get Hil",
  })
  @get()
  static getHil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hil",
  })
  @post("{id}")
  static createHil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

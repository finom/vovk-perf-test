import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fys")
export default class FysController {
  @operation({
    summary: "Get Fys",
  })
  @get()
  static getFys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fys",
  })
  @post("{id}")
  static createFys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

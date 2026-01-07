import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cir")
export default class CirController {
  @operation({
    summary: "Get Cir",
  })
  @get()
  static getCir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cir",
  })
  @post("{id}")
  static createCir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

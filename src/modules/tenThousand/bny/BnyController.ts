import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bny")
export default class BnyController {
  @operation({
    summary: "Get Bny",
  })
  @get()
  static getBny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bny",
  })
  @post("{id}")
  static createBny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

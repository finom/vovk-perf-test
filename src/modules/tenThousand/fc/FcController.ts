import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcs")
export default class FcController {
  @operation({
    summary: "Get Fcs",
  })
  @get()
  static getFcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fc",
  })
  @post("{id}")
  static createFc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

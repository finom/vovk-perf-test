import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fur")
export default class FurController {
  @operation({
    summary: "Get Fur",
  })
  @get()
  static getFur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fur",
  })
  @post("{id}")
  static createFur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

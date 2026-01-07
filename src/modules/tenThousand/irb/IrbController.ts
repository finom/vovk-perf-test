import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irb")
export default class IrbController {
  @operation({
    summary: "Get Irb",
  })
  @get()
  static getIrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irb",
  })
  @post("{id}")
  static createIrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irbs")
export default class IrbController {
  @operation({
    summary: "Get Irbs",
  })
  @get()
  static getIrbs = procedure({
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

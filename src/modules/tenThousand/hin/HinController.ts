import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hin")
export default class HinController {
  @operation({
    summary: "Get Hin",
  })
  @get()
  static getHin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hin",
  })
  @post("{id}")
  static createHin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

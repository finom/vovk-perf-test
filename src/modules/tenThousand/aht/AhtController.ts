import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahts")
export default class AhtController {
  @operation({
    summary: "Get Ahts",
  })
  @get()
  static getAhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aht",
  })
  @post("{id}")
  static createAht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

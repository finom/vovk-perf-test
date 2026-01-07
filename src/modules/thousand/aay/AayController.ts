import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aay")
export default class AayController {
  @operation({
    summary: "Get Aay",
  })
  @get()
  static getAay = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aay",
  })
  @post("{id}")
  static createAay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

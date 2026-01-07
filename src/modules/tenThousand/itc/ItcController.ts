import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itc")
export default class ItcController {
  @operation({
    summary: "Get Itc",
  })
  @get()
  static getItc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itc",
  })
  @post("{id}")
  static createItc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

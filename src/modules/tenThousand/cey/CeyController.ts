import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cey")
export default class CeyController {
  @operation({
    summary: "Get Cey",
  })
  @get()
  static getCey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cey",
  })
  @post("{id}")
  static createCey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

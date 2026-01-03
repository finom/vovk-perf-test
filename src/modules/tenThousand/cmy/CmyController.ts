import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmies")
export default class CmyController {
  @operation({
    summary: "Get Cmies",
  })
  @get()
  static getCmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmy",
  })
  @post("{id}")
  static createCmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhms")
export default class JhmController {
  @operation({
    summary: "Get Jhms",
  })
  @get()
  static getJhms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhm",
  })
  @post("{id}")
  static createJhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezms")
export default class EzmController {
  @operation({
    summary: "Get Ezms",
  })
  @get()
  static getEzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezm",
  })
  @post("{id}")
  static createEzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

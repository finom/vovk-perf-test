import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdf")
export default class JdfController {
  @operation({
    summary: "Get Jdf",
  })
  @get()
  static getJdf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdf",
  })
  @post("{id}")
  static createJdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

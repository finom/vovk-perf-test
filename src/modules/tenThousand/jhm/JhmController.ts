import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhm")
export default class JhmController {
  @operation({
    summary: "Get Jhm",
  })
  @get()
  static getJhm = procedure({
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

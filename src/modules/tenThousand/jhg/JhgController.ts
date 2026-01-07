import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhg")
export default class JhgController {
  @operation({
    summary: "Get Jhg",
  })
  @get()
  static getJhg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhg",
  })
  @post("{id}")
  static createJhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

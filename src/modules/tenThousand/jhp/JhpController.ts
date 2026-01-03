import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhps")
export default class JhpController {
  @operation({
    summary: "Get Jhps",
  })
  @get()
  static getJhps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhp",
  })
  @post("{id}")
  static createJhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

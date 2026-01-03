import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awhs")
export default class AwhController {
  @operation({
    summary: "Get Awhs",
  })
  @get()
  static getAwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awh",
  })
  @post("{id}")
  static createAwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

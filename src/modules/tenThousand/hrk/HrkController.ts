import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrk")
export default class HrkController {
  @operation({
    summary: "Get Hrk",
  })
  @get()
  static getHrk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrk",
  })
  @post("{id}")
  static createHrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

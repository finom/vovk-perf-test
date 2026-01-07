import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibk")
export default class IbkController {
  @operation({
    summary: "Get Ibk",
  })
  @get()
  static getIbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibk",
  })
  @post("{id}")
  static createIbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

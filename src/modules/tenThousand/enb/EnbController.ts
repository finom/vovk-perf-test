import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enb")
export default class EnbController {
  @operation({
    summary: "Get Enb",
  })
  @get()
  static getEnb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enb",
  })
  @post("{id}")
  static createEnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqx")
export default class AqxController {
  @operation({
    summary: "Get Aqx",
  })
  @get()
  static getAqx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqx",
  })
  @post("{id}")
  static createAqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

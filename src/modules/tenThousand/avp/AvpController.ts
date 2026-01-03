import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avps")
export default class AvpController {
  @operation({
    summary: "Get Avps",
  })
  @get()
  static getAvps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avp",
  })
  @post("{id}")
  static createAvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

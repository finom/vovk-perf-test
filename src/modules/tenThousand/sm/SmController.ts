import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sms")
export default class SmController {
  @operation({
    summary: "Get Sms",
  })
  @get()
  static getSms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sm",
  })
  @post("{id}")
  static createSm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

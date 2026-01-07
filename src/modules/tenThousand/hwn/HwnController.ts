import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwn")
export default class HwnController {
  @operation({
    summary: "Get Hwn",
  })
  @get()
  static getHwn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwn",
  })
  @post("{id}")
  static createHwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ams")
export default class AmsController {
  @operation({
    summary: "Get Ams",
  })
  @get()
  static getAms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ams",
  })
  @post("{id}")
  static createAms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

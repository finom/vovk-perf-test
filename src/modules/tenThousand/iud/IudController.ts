import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iud")
export default class IudController {
  @operation({
    summary: "Get Iud",
  })
  @get()
  static getIud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iud",
  })
  @post("{id}")
  static createIud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

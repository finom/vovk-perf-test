import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ds")
export default class DsController {
  @operation({
    summary: "Get Ds",
  })
  @get()
  static getDs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ds",
  })
  @post("{id}")
  static createDs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsgs")
export default class DsgController {
  @operation({
    summary: "Get Dsgs",
  })
  @get()
  static getDsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsg",
  })
  @post("{id}")
  static createDsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

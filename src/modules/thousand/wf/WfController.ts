import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wf")
export default class WfController {
  @operation({
    summary: "Get Wf",
  })
  @get()
  static getWf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wf",
  })
  @post("{id}")
  static createWf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

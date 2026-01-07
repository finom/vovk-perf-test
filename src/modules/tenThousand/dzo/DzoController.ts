import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzo")
export default class DzoController {
  @operation({
    summary: "Get Dzo",
  })
  @get()
  static getDzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzo",
  })
  @post("{id}")
  static createDzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

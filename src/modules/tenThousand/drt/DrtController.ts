import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drt")
export default class DrtController {
  @operation({
    summary: "Get Drt",
  })
  @get()
  static getDrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drt",
  })
  @post("{id}")
  static createDrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

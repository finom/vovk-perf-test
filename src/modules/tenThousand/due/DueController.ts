import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dues")
export default class DueController {
  @operation({
    summary: "Get Dues",
  })
  @get()
  static getDues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Due",
  })
  @post("{id}")
  static createDue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baw")
export default class BawController {
  @operation({
    summary: "Get Baw",
  })
  @get()
  static getBaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Baw",
  })
  @post("{id}")
  static createBaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

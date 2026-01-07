import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dru")
export default class DruController {
  @operation({
    summary: "Get Dru",
  })
  @get()
  static getDru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dru",
  })
  @post("{id}")
  static createDru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

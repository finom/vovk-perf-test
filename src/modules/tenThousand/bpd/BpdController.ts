import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpd")
export default class BpdController {
  @operation({
    summary: "Get Bpd",
  })
  @get()
  static getBpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpd",
  })
  @post("{id}")
  static createBpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

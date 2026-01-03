import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpds")
export default class BpdController {
  @operation({
    summary: "Get Bpds",
  })
  @get()
  static getBpds = procedure({
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

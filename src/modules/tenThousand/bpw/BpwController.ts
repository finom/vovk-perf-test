import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpw")
export default class BpwController {
  @operation({
    summary: "Get Bpw",
  })
  @get()
  static getBpw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpw",
  })
  @post("{id}")
  static createBpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

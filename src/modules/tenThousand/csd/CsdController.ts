import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csd")
export default class CsdController {
  @operation({
    summary: "Get Csd",
  })
  @get()
  static getCsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csd",
  })
  @post("{id}")
  static createCsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

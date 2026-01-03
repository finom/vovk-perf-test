import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnns")
export default class CnnController {
  @operation({
    summary: "Get Cnns",
  })
  @get()
  static getCnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnn",
  })
  @post("{id}")
  static createCnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

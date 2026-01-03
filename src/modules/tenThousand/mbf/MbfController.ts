import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbfs")
export default class MbfController {
  @operation({
    summary: "Get Mbfs",
  })
  @get()
  static getMbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbf",
  })
  @post("{id}")
  static createMbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

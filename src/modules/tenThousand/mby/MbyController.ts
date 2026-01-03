import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbies")
export default class MbyController {
  @operation({
    summary: "Get Mbies",
  })
  @get()
  static getMbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mby",
  })
  @post("{id}")
  static createMby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

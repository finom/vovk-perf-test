import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcies")
export default class McyController {
  @operation({
    summary: "Get Mcies",
  })
  @get()
  static getMcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcy",
  })
  @post("{id}")
  static createMcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

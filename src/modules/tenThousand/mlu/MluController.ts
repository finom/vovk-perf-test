import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlus")
export default class MluController {
  @operation({
    summary: "Get Mlus",
  })
  @get()
  static getMlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlu",
  })
  @post("{id}")
  static createMlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

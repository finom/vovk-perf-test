import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlf")
export default class MlfController {
  @operation({
    summary: "Get Mlf",
  })
  @get()
  static getMlf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlf",
  })
  @post("{id}")
  static createMlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

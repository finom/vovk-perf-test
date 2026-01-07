import { procedure, prefix, get, post, operation } from "vovk";

@prefix("af")
export default class AfController {
  @operation({
    summary: "Get Af",
  })
  @get()
  static getAf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Af",
  })
  @post("{id}")
  static createAf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

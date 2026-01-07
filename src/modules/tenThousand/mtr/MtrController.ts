import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtr")
export default class MtrController {
  @operation({
    summary: "Get Mtr",
  })
  @get()
  static getMtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtr",
  })
  @post("{id}")
  static createMtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nns")
export default class NnsController {
  @operation({
    summary: "Get Nns",
  })
  @get()
  static getNns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nns",
  })
  @post("{id}")
  static createNns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

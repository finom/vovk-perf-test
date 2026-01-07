import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiw")
export default class FiwController {
  @operation({
    summary: "Get Fiw",
  })
  @get()
  static getFiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiw",
  })
  @post("{id}")
  static createFiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

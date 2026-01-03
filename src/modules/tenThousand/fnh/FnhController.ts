import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnhs")
export default class FnhController {
  @operation({
    summary: "Get Fnhs",
  })
  @get()
  static getFnhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnh",
  })
  @post("{id}")
  static createFnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnh")
export default class FnhController {
  @operation({
    summary: "Get Fnh",
  })
  @get()
  static getFnh = procedure({
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

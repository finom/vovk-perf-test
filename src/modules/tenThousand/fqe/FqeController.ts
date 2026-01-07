import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqe")
export default class FqeController {
  @operation({
    summary: "Get Fqe",
  })
  @get()
  static getFqe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqe",
  })
  @post("{id}")
  static createFqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnh")
export default class NnhController {
  @operation({
    summary: "Get Nnh",
  })
  @get()
  static getNnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnh",
  })
  @post("{id}")
  static createNnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

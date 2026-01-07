import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqe")
export default class NqeController {
  @operation({
    summary: "Get Nqe",
  })
  @get()
  static getNqe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqe",
  })
  @post("{id}")
  static createNqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

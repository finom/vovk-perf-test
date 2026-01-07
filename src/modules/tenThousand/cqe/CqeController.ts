import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqe")
export default class CqeController {
  @operation({
    summary: "Get Cqe",
  })
  @get()
  static getCqe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqe",
  })
  @post("{id}")
  static createCqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

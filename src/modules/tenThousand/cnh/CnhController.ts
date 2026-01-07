import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnh")
export default class CnhController {
  @operation({
    summary: "Get Cnh",
  })
  @get()
  static getCnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnh",
  })
  @post("{id}")
  static createCnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

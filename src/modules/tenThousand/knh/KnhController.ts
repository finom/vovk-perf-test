import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knh")
export default class KnhController {
  @operation({
    summary: "Get Knh",
  })
  @get()
  static getKnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knh",
  })
  @post("{id}")
  static createKnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

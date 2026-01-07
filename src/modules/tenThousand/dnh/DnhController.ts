import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnh")
export default class DnhController {
  @operation({
    summary: "Get Dnh",
  })
  @get()
  static getDnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnh",
  })
  @post("{id}")
  static createDnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

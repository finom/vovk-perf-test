import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnhs")
export default class DnhController {
  @operation({
    summary: "Get Dnhs",
  })
  @get()
  static getDnhs = procedure({
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

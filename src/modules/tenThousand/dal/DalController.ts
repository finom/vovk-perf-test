import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dals")
export default class DalController {
  @operation({
    summary: "Get Dals",
  })
  @get()
  static getDals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dal",
  })
  @post("{id}")
  static createDal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

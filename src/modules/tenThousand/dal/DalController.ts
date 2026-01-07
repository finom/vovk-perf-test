import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dal")
export default class DalController {
  @operation({
    summary: "Get Dal",
  })
  @get()
  static getDal = procedure({
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

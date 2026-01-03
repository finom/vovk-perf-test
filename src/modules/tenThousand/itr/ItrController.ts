import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itrs")
export default class ItrController {
  @operation({
    summary: "Get Itrs",
  })
  @get()
  static getItrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itr",
  })
  @post("{id}")
  static createItr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

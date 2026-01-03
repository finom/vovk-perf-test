import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdcs")
export default class MdcController {
  @operation({
    summary: "Get Mdcs",
  })
  @get()
  static getMdcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdc",
  })
  @post("{id}")
  static createMdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

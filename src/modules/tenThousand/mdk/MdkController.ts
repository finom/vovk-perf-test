import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdks")
export default class MdkController {
  @operation({
    summary: "Get Mdks",
  })
  @get()
  static getMdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdk",
  })
  @post("{id}")
  static createMdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

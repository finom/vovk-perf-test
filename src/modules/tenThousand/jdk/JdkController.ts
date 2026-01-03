import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdks")
export default class JdkController {
  @operation({
    summary: "Get Jdks",
  })
  @get()
  static getJdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdk",
  })
  @post("{id}")
  static createJdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iovs")
export default class IovController {
  @operation({
    summary: "Get Iovs",
  })
  @get()
  static getIovs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iov",
  })
  @post("{id}")
  static createIov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iovs")
export default class IovController {
  @operation({
    summary: "Get Iovs",
  })
  @get()
  static getIovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iov",
  })
  @post("{id}")
  static createIov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("td")
export default class TdController {
  @operation({
    summary: "Get Td",
  })
  @get()
  static getTd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Td",
  })
  @post("{id}")
  static createTd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

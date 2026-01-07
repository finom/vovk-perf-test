import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exc")
export default class ExcController {
  @operation({
    summary: "Get Exc",
  })
  @get()
  static getExc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exc",
  })
  @post("{id}")
  static createExc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

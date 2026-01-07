import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foo")
export default class FooController {
  @operation({
    summary: "Get Foo",
  })
  @get()
  static getFoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foo",
  })
  @post("{id}")
  static createFoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

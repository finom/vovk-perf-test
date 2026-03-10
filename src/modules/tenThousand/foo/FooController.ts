import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foo")
export default class FooController {
  @operation({
    summary: "Get Foo",
  })
  @get()
  static getFoo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Foo",
  })
  @post("{id}")
  static createFoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

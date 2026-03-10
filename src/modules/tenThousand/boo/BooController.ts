import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boo")
export default class BooController {
  @operation({
    summary: "Get Boo",
  })
  @get()
  static getBoo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boo",
  })
  @post("{id}")
  static createBoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

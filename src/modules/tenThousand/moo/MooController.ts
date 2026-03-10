import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moo")
export default class MooController {
  @operation({
    summary: "Get Moo",
  })
  @get()
  static getMoo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Moo",
  })
  @post("{id}")
  static createMoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

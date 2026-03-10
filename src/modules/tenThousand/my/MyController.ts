import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("my")
export default class MyController {
  @operation({
    summary: "Get My",
  })
  @get()
  static getMy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create My",
  })
  @post("{id}")
  static createMy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

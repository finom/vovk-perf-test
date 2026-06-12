import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjk")
export default class MjkController {
  @operation({
    summary: "Get Mjk",
  })
  @get()
  static getMjk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjk",
  })
  @post("{id}")
  static createMjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjw")
export default class MjwController {
  @operation({
    summary: "Get Mjw",
  })
  @get()
  static getMjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjw",
  })
  @post("{id}")
  static createMjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

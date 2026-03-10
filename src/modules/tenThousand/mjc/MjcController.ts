import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjc")
export default class MjcController {
  @operation({
    summary: "Get Mjc",
  })
  @get()
  static getMjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjc",
  })
  @post("{id}")
  static createMjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

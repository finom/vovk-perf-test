import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjn")
export default class MjnController {
  @operation({
    summary: "Get Mjn",
  })
  @get()
  static getMjn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjn",
  })
  @post("{id}")
  static createMjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

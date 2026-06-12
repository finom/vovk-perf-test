import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sh")
export default class ShController {
  @operation({
    summary: "Get Sh",
  })
  @get()
  static getSh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sh",
  })
  @post("{id}")
  static createSh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

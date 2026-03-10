import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mju")
export default class MjuController {
  @operation({
    summary: "Get Mju",
  })
  @get()
  static getMju = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mju",
  })
  @post("{id}")
  static createMju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

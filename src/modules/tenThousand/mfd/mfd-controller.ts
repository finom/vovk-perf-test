import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfd")
export default class MfdController {
  @operation({
    summary: "Get Mfd",
  })
  @get()
  static getMfd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfd",
  })
  @post("{id}")
  static createMfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

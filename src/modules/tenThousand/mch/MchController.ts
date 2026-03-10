import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mch")
export default class MchController {
  @operation({
    summary: "Get Mch",
  })
  @get()
  static getMch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mch",
  })
  @post("{id}")
  static createMch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

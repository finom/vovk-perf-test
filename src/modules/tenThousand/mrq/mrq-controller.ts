import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrq")
export default class MrqController {
  @operation({
    summary: "Get Mrq",
  })
  @get()
  static getMrq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrq",
  })
  @post("{id}")
  static createMrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

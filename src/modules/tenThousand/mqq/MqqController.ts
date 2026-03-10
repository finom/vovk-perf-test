import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqq")
export default class MqqController {
  @operation({
    summary: "Get Mqq",
  })
  @get()
  static getMqq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqq",
  })
  @post("{id}")
  static createMqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

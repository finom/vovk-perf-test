import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amq")
export default class AmqController {
  @operation({
    summary: "Get Amq",
  })
  @get()
  static getAmq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amq",
  })
  @post("{id}")
  static createAmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

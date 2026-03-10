import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqp")
export default class LqpController {
  @operation({
    summary: "Get Lqp",
  })
  @get()
  static getLqp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqp",
  })
  @post("{id}")
  static createLqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqp")
export default class KqpController {
  @operation({
    summary: "Get Kqp",
  })
  @get()
  static getKqp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqp",
  })
  @post("{id}")
  static createKqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqp")
export default class IqpController {
  @operation({
    summary: "Get Iqp",
  })
  @get()
  static getIqp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqp",
  })
  @post("{id}")
  static createIqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

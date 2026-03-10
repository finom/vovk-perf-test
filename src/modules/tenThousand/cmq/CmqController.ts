import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmq")
export default class CmqController {
  @operation({
    summary: "Get Cmq",
  })
  @get()
  static getCmq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmq",
  })
  @post("{id}")
  static createCmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

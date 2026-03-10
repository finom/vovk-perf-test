import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qo")
export default class QoController {
  @operation({
    summary: "Get Qo",
  })
  @get()
  static getQo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qo",
  })
  @post("{id}")
  static createQo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

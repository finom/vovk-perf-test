import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qf")
export default class QfController {
  @operation({
    summary: "Get Qf",
  })
  @get()
  static getQf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qf",
  })
  @post("{id}")
  static createQf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qp")
export default class QpController {
  @operation({
    summary: "Get Qp",
  })
  @get()
  static getQp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qp",
  })
  @post("{id}")
  static createQp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

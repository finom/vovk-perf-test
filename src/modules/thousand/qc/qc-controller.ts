import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qc")
export default class QcController {
  @operation({
    summary: "Get Qc",
  })
  @get()
  static getQc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qc",
  })
  @post("{id}")
  static createQc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

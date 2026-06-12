import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctc")
export default class CtcController {
  @operation({
    summary: "Get Ctc",
  })
  @get()
  static getCtc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctc",
  })
  @post("{id}")
  static createCtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

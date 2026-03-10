import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jal")
export default class JalController {
  @operation({
    summary: "Get Jal",
  })
  @get()
  static getJal = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jal",
  })
  @post("{id}")
  static createJal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

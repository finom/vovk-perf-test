import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jge")
export default class JgeController {
  @operation({
    summary: "Get Jge",
  })
  @get()
  static getJge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jge",
  })
  @post("{id}")
  static createJge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

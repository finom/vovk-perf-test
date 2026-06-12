import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdq")
export default class JdqController {
  @operation({
    summary: "Get Jdq",
  })
  @get()
  static getJdq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdq",
  })
  @post("{id}")
  static createJdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

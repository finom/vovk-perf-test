import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkf")
export default class JkfController {
  @operation({
    summary: "Get Jkf",
  })
  @get()
  static getJkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkf",
  })
  @post("{id}")
  static createJkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

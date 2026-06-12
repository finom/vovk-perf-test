import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyk")
export default class JykController {
  @operation({
    summary: "Get Jyk",
  })
  @get()
  static getJyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyk",
  })
  @post("{id}")
  static createJyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egn")
export default class EgnController {
  @operation({
    summary: "Get Egn",
  })
  @get()
  static getEgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egn",
  })
  @post("{id}")
  static createEgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

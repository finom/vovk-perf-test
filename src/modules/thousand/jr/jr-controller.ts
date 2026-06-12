import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jr")
export default class JrController {
  @operation({
    summary: "Get Jr",
  })
  @get()
  static getJr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jr",
  })
  @post("{id}")
  static createJr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsd")
export default class JsdController {
  @operation({
    summary: "Get Jsd",
  })
  @get()
  static getJsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsd",
  })
  @post("{id}")
  static createJsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvo")
export default class JvoController {
  @operation({
    summary: "Get Jvo",
  })
  @get()
  static getJvo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvo",
  })
  @post("{id}")
  static createJvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

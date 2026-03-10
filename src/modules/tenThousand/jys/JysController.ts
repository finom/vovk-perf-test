import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jys")
export default class JysController {
  @operation({
    summary: "Get Jys",
  })
  @get()
  static getJys = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jys",
  })
  @post("{id}")
  static createJys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdv")
export default class JdvController {
  @operation({
    summary: "Get Jdv",
  })
  @get()
  static getJdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdv",
  })
  @post("{id}")
  static createJdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

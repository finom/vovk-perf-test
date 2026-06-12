import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdb")
export default class JdbController {
  @operation({
    summary: "Get Jdb",
  })
  @get()
  static getJdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdb",
  })
  @post("{id}")
  static createJdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

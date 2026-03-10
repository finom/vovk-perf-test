import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldn")
export default class LdnController {
  @operation({
    summary: "Get Ldn",
  })
  @get()
  static getLdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldn",
  })
  @post("{id}")
  static createLdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

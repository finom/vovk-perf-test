import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqo")
export default class DqoController {
  @operation({
    summary: "Get Dqo",
  })
  @get()
  static getDqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqo",
  })
  @post("{id}")
  static createDqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

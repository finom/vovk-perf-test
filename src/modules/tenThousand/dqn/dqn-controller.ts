import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqn")
export default class DqnController {
  @operation({
    summary: "Get Dqn",
  })
  @get()
  static getDqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqn",
  })
  @post("{id}")
  static createDqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

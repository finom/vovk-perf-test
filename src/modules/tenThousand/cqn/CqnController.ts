import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqn")
export default class CqnController {
  @operation({
    summary: "Get Cqn",
  })
  @get()
  static getCqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqn",
  })
  @post("{id}")
  static createCqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqn")
export default class GqnController {
  @operation({
    summary: "Get Gqn",
  })
  @get()
  static getGqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqn",
  })
  @post("{id}")
  static createGqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

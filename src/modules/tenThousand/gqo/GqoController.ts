import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqo")
export default class GqoController {
  @operation({
    summary: "Get Gqo",
  })
  @get()
  static getGqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqo",
  })
  @post("{id}")
  static createGqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

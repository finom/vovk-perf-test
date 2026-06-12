import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("or")
export default class OrController {
  @operation({
    summary: "Get Or",
  })
  @get()
  static getOr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Or",
  })
  @post("{id}")
  static createOr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

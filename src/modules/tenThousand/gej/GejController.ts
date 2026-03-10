import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gej")
export default class GejController {
  @operation({
    summary: "Get Gej",
  })
  @get()
  static getGej = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gej",
  })
  @post("{id}")
  static createGej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

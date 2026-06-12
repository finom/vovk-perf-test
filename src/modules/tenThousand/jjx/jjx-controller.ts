import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjx")
export default class JjxController {
  @operation({
    summary: "Get Jjx",
  })
  @get()
  static getJjx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjx",
  })
  @post("{id}")
  static createJjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjh")
export default class JjhController {
  @operation({
    summary: "Get Jjh",
  })
  @get()
  static getJjh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjh",
  })
  @post("{id}")
  static createJjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

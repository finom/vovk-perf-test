import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ken")
export default class KenController {
  @operation({
    summary: "Get Ken",
  })
  @get()
  static getKen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ken",
  })
  @post("{id}")
  static createKen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

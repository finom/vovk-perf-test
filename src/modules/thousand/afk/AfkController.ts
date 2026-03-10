import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afk")
export default class AfkController {
  @operation({
    summary: "Get Afk",
  })
  @get()
  static getAfk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afk",
  })
  @post("{id}")
  static createAfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

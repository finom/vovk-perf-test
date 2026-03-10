import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlk")
export default class JlkController {
  @operation({
    summary: "Get Jlk",
  })
  @get()
  static getJlk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlk",
  })
  @post("{id}")
  static createJlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

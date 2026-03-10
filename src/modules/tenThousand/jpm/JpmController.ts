import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpm")
export default class JpmController {
  @operation({
    summary: "Get Jpm",
  })
  @get()
  static getJpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpm",
  })
  @post("{id}")
  static createJpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

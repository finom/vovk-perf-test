import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsu")
export default class JsuController {
  @operation({
    summary: "Get Jsu",
  })
  @get()
  static getJsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsu",
  })
  @post("{id}")
  static createJsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

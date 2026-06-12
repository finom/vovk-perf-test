import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlt")
export default class JltController {
  @operation({
    summary: "Get Jlt",
  })
  @get()
  static getJlt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlt",
  })
  @post("{id}")
  static createJlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

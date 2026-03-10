import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyi")
export default class JyiController {
  @operation({
    summary: "Get Jyi",
  })
  @get()
  static getJyi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyi",
  })
  @post("{id}")
  static createJyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

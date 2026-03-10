import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzi")
export default class JziController {
  @operation({
    summary: "Get Jzi",
  })
  @get()
  static getJzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzi",
  })
  @post("{id}")
  static createJzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

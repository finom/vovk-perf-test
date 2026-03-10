import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlc")
export default class JlcController {
  @operation({
    summary: "Get Jlc",
  })
  @get()
  static getJlc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlc",
  })
  @post("{id}")
  static createJlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

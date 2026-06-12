import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jig")
export default class JigController {
  @operation({
    summary: "Get Jig",
  })
  @get()
  static getJig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jig",
  })
  @post("{id}")
  static createJig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

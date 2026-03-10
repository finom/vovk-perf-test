import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzo")
export default class JzoController {
  @operation({
    summary: "Get Jzo",
  })
  @get()
  static getJzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzo",
  })
  @post("{id}")
  static createJzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

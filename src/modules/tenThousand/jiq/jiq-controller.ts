import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jiq")
export default class JiqController {
  @operation({
    summary: "Get Jiq",
  })
  @get()
  static getJiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jiq",
  })
  @post("{id}")
  static createJiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

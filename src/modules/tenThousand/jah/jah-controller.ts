import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jah")
export default class JahController {
  @operation({
    summary: "Get Jah",
  })
  @get()
  static getJah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jah",
  })
  @post("{id}")
  static createJah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

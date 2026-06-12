import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jok")
export default class JokController {
  @operation({
    summary: "Get Jok",
  })
  @get()
  static getJok = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jok",
  })
  @post("{id}")
  static createJok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

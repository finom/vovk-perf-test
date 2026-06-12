import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jor")
export default class JorController {
  @operation({
    summary: "Get Jor",
  })
  @get()
  static getJor = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jor",
  })
  @post("{id}")
  static createJor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

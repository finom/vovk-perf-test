import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyt")
export default class JytController {
  @operation({
    summary: "Get Jyt",
  })
  @get()
  static getJyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyt",
  })
  @post("{id}")
  static createJyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

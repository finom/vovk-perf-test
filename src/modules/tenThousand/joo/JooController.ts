import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joo")
export default class JooController {
  @operation({
    summary: "Get Joo",
  })
  @get()
  static getJoo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Joo",
  })
  @post("{id}")
  static createJoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

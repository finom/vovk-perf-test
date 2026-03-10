import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("in")
export default class InController {
  @operation({
    summary: "Get In",
  })
  @get()
  static getIn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create In",
  })
  @post("{id}")
  static createIn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

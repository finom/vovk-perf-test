import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("q")
export default class QController {
  @operation({
    summary: "Get Q",
  })
  @get()
  static getQ = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Q",
  })
  @post("{id}")
  static createQ = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

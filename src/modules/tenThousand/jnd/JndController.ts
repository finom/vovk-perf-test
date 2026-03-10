import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnd")
export default class JndController {
  @operation({
    summary: "Get Jnd",
  })
  @get()
  static getJnd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnd",
  })
  @post("{id}")
  static createJnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

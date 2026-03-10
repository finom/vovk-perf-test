import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("os")
export default class OsController {
  @operation({
    summary: "Get Os",
  })
  @get()
  static getOs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Os",
  })
  @post("{id}")
  static createOs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

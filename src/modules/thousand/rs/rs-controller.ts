import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rs")
export default class RsController {
  @operation({
    summary: "Get Rs",
  })
  @get()
  static getRs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rs",
  })
  @post("{id}")
  static createRs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mht")
export default class MhtController {
  @operation({
    summary: "Get Mht",
  })
  @get()
  static getMht = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mht",
  })
  @post("{id}")
  static createMht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

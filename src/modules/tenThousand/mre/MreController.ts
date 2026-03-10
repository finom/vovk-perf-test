import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mre")
export default class MreController {
  @operation({
    summary: "Get Mre",
  })
  @get()
  static getMre = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mre",
  })
  @post("{id}")
  static createMre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

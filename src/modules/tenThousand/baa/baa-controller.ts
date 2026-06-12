import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("baa")
export default class BaaController {
  @operation({
    summary: "Get Baa",
  })
  @get()
  static getBaa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Baa",
  })
  @post("{id}")
  static createBaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

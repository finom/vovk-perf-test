import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmk")
export default class LmkController {
  @operation({
    summary: "Get Lmk",
  })
  @get()
  static getLmk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmk",
  })
  @post("{id}")
  static createLmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

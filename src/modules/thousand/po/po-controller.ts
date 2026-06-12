import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("po")
export default class PoController {
  @operation({
    summary: "Get Po",
  })
  @get()
  static getPo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Po",
  })
  @post("{id}")
  static createPo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

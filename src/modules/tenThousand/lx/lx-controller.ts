import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lx")
export default class LxController {
  @operation({
    summary: "Get Lx",
  })
  @get()
  static getLx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lx",
  })
  @post("{id}")
  static createLx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

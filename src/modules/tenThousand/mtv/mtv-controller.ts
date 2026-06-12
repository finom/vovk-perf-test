import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtv")
export default class MtvController {
  @operation({
    summary: "Get Mtv",
  })
  @get()
  static getMtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtv",
  })
  @post("{id}")
  static createMtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

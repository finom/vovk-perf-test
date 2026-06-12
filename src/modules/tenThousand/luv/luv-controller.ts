import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luv")
export default class LuvController {
  @operation({
    summary: "Get Luv",
  })
  @get()
  static getLuv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Luv",
  })
  @post("{id}")
  static createLuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

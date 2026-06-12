import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lai")
export default class LaiController {
  @operation({
    summary: "Get Lai",
  })
  @get()
  static getLai = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lai",
  })
  @post("{id}")
  static createLai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

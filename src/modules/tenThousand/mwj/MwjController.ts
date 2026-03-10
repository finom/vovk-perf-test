import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwj")
export default class MwjController {
  @operation({
    summary: "Get Mwj",
  })
  @get()
  static getMwj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwj",
  })
  @post("{id}")
  static createMwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxt")
export default class LxtController {
  @operation({
    summary: "Get Lxt",
  })
  @get()
  static getLxt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxt",
  })
  @post("{id}")
  static createLxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

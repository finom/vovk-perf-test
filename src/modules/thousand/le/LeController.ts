import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("le")
export default class LeController {
  @operation({
    summary: "Get Le",
  })
  @get()
  static getLe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Le",
  })
  @post("{id}")
  static createLe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

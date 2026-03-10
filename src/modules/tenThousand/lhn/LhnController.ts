import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhn")
export default class LhnController {
  @operation({
    summary: "Get Lhn",
  })
  @get()
  static getLhn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhn",
  })
  @post("{id}")
  static createLhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

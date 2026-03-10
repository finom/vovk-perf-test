import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwg")
export default class LwgController {
  @operation({
    summary: "Get Lwg",
  })
  @get()
  static getLwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwg",
  })
  @post("{id}")
  static createLwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

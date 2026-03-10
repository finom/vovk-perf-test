import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bio")
export default class BioController {
  @operation({
    summary: "Get Bio",
  })
  @get()
  static getBio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bio",
  })
  @post("{id}")
  static createBio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

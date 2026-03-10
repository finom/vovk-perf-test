import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lah")
export default class LahController {
  @operation({
    summary: "Get Lah",
  })
  @get()
  static getLah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lah",
  })
  @post("{id}")
  static createLah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lii")
export default class LiiController {
  @operation({
    summary: "Get Lii",
  })
  @get()
  static getLii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lii",
  })
  @post("{id}")
  static createLii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhv")
export default class MhvController {
  @operation({
    summary: "Get Mhv",
  })
  @get()
  static getMhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhv",
  })
  @post("{id}")
  static createMhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

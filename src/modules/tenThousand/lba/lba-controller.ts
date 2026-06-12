import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lba")
export default class LbaController {
  @operation({
    summary: "Get Lba",
  })
  @get()
  static getLba = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lba",
  })
  @post("{id}")
  static createLba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

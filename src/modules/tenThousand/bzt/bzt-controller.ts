import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzt")
export default class BztController {
  @operation({
    summary: "Get Bzt",
  })
  @get()
  static getBzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzt",
  })
  @post("{id}")
  static createBzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

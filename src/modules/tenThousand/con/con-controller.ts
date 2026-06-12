import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("con")
export default class ConController {
  @operation({
    summary: "Get Con",
  })
  @get()
  static getCon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Con",
  })
  @post("{id}")
  static createCon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

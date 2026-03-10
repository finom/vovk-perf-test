import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dud")
export default class DudController {
  @operation({
    summary: "Get Dud",
  })
  @get()
  static getDud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dud",
  })
  @post("{id}")
  static createDud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

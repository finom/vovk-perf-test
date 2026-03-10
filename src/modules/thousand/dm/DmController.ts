import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dm")
export default class DmController {
  @operation({
    summary: "Get Dm",
  })
  @get()
  static getDm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dm",
  })
  @post("{id}")
  static createDm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

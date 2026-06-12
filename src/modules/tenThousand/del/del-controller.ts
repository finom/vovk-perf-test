import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("del")
export default class DelController {
  @operation({
    summary: "Get Del",
  })
  @get()
  static getDel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Del",
  })
  @post("{id}")
  static createDel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

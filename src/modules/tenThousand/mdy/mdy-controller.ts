import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdy")
export default class MdyController {
  @operation({
    summary: "Get Mdy",
  })
  @get()
  static getMdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdy",
  })
  @post("{id}")
  static createMdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnh")
export default class BnhController {
  @operation({
    summary: "Get Bnh",
  })
  @get()
  static getBnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnh",
  })
  @post("{id}")
  static createBnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

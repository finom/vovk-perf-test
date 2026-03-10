import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnh")
export default class LnhController {
  @operation({
    summary: "Get Lnh",
  })
  @get()
  static getLnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnh",
  })
  @post("{id}")
  static createLnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hny")
export default class HnyController {
  @operation({
    summary: "Get Hny",
  })
  @get()
  static getHny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hny",
  })
  @post("{id}")
  static createHny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
